import { readdir, readFile, writeFile, rm, mkdir, copyFile } from 'fs/promises';

import { parse } from 'path';
import numberToWords from 'number-to-words';
import { runConcurrently } from './runConcurrently';
import { buildSvg } from './buildSvg';

const getComponentTypings = (componentName) =>
    `
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

declare const ${componentName}: ComponentType<SvgProps>;

export default ${componentName};
`.trimStart();

const getComponentName = (sourceName: string) => {
    sourceName = sourceName.replace(/\d+/, (value) => {
        return numberToWords.toWords(Number(value)).replace(/\W+/g, '_');
    });

    const words = sourceName
        .split('_')
        .filter(Boolean)
        .map((value) => {
            return value.charAt(0).toUpperCase().concat(value.slice(1));
        });

    return words.join('');
};

const buildIcon = async (iconSvgPath: string) => {
    const svgSource = await readFile(`./icons/${iconSvgPath}`);

    const { name: iconName } = parse(iconSvgPath);

    const componentName = getComponentName(iconName);
    const componentSource = buildSvg(svgSource.toString(), componentName);

    await writeFile(`./dist/${componentName}.js`, componentSource);
    await writeFile(`./dist/${componentName}.d.ts`, getComponentTypings(componentName));
};

try {
    await rm('dist', { recursive: true, force: true });
    await mkdir('dist');

    await copyFile('./src/utils.js', './dist/u.js');

    const icons = await readdir('./icons');

    const { total, failed, succeed } = await runConcurrently(icons, buildIcon, 16);

    console.log(`Ran ${total} in parallel, ${succeed} succeed, ${failed} failed.`);
} catch (error: unknown) {
    console.error(error);
}
