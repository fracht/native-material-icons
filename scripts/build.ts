import { readdir, readFile, writeFile, rm, mkdir, copyFile } from 'fs/promises';

import { parse } from 'path';
import numberToWords from 'number-to-words';
import { runConcurrently } from './runConcurrently';
import { buildSvg } from './buildSvg';
import { capitalize } from './capitalize';

const getComponentTypings = (componentName) =>
    `
import { SvgIconComponent } from './types';

declare const ${componentName}: SvgIconComponent;
export default ${componentName};
`.trimStart();

const toWords = (value: string) => {
    return numberToWords.toWords(Number(value)).replace(/\W+/g, '_').split('_').map(capitalize).join('');
};

const getComponentName = (sourceName: string) => {
    const words = sourceName.split('_').filter(Boolean);

    if (!Number.isNaN(Number(words[0].charAt(0)))) {
        if (Number.isNaN(Number(words[0]))) {
            words[0] = words[0].replace(/\d+\w/g, (value) => {
                const lastChar = value[value.length - 1];

                const numberSource = value.slice(0, -1);

                return toWords(numberSource).concat(lastChar.toUpperCase());
            });
        } else {
            words[0] = toWords(words[0]);
        }
    }

    const capitalizedWords = words.map(capitalize).concat('Icon');

    return capitalizedWords.join('');
};

const buildIcon = async (iconSvgPath: string) => {
    const svgSource = await readFile(`./icons/${iconSvgPath}`);

    const { name: iconName } = parse(iconSvgPath);

    const componentName = getComponentName(iconName);
    const componentSource = buildSvg(svgSource.toString(), componentName);

    await writeFile(`./dist/${componentName}.js`, componentSource);
    await writeFile(`./dist/${componentName}.d.ts`, getComponentTypings(componentName));
};

const generateEntrypoint = async (files: string[]) => {
    let entryJsOut = '';
    let entryTsOut = "import { SvgIconComponent } from './types';\n";

    for (const iconFile of files) {
        const { name: iconName } = parse(iconFile);

        const componentName = getComponentName(iconName);

        entryJsOut += `export { default as ${componentName} } from './${componentName}';\n`;
        entryTsOut += `export declare const ${componentName}: SvgIconComponent;\n`;
    }

    await writeFile('./dist/index.js', entryJsOut);
    await writeFile('./dist/index.d.ts', entryTsOut);
};

try {
    await rm('dist', { recursive: true, force: true });
    await mkdir('dist');

    await copyFile('./src/utils.js', './dist/u.js');
    await copyFile('./src/types.d.ts', './dist/types.d.ts');

    const icons = await readdir('./icons');

    const { total, failed, succeed } = await runConcurrently(icons, buildIcon, 16);

    console.log(`Ran ${total} in parallel, ${succeed} succeed, ${failed} failed.`);

    await generateEntrypoint(icons);

    console.log('Generated entrypoints');
} catch (error: unknown) {
    console.error(error);
}
