import { writeFile, rm, mkdir } from 'fs/promises';
import { optimize as svgoOptimize, OptimizedError as SvgoError, OptimizedSvg } from 'svgo';
import { transform as transformToReactComponent } from '@svgr/core';
import { format } from 'prettier';
import numberToWords from 'number-to-words';
import { runConcurrently } from './runConcurrently';

const BASE_URL = 'https://fonts.google.com';

const url = new URL('metadata/icons', BASE_URL);

const response = await fetch(url);

const text = await response.text();

type IconMetadata = {
    name: string;
    version: number;
    popularity: number;
    codepoint: number;
    unsupported_families: string[];
    categories: string[];
    tags: string[];
    size_px: number[];
};

type MaterialIconMetadata = {
    host: string;
    asset_url_pattern: string;
    families: string[];
    icons: IconMetadata[];
};

const metadata: MaterialIconMetadata = JSON.parse(text.replace(")]}'", '')) as MaterialIconMetadata;

const fetchIconVariant = async (icon: IconMetadata, fontFamily: string) => {
    const url = new URL(
        metadata.asset_url_pattern
            .replace('{family}', fontFamily)
            .replace('{icon}', icon.name)
            .replace('{version}', icon.version.toString())
            .replace('{asset}', '24px.svg'),
        `https://${metadata.host}`,
    );

    const response = await fetch(url);

    return response.text();
};

const normalizedFamilies = metadata.families.map((family) => family.toLowerCase().replace(/\s+/g, ''));

const prefixes = metadata.families.map((family) =>
    family.toLowerCase().replace('material icons', '').replace(/\s+/g, '_'),
);

const isOptimizedImage = (value: unknown): value is OptimizedSvg => typeof (value as OptimizedSvg).data === 'string';

const optimizeSvg = (data: string) => {
    /* Shamelessly stolen from https://github.com/mui/material-ui/blob/d3b0096257b986d47dc74b18e42cb306bea6b814/packages/mui-icons-material/builder.js */
    const input = data
        .replace(/ fill="#010101"/g, '')
        .replace(/<rect fill="none" width="24" height="24"\/>/g, '')
        .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, '');

    const result = svgoOptimize(input, {
        floatPrecision: 4,
        multipass: true,
        plugins: [
            { name: 'cleanupAttrs' },
            { name: 'removeDoctype' },
            { name: 'removeXMLProcInst' },
            { name: 'removeComments' },
            { name: 'removeMetadata' },
            { name: 'removeTitle' },
            { name: 'removeDesc' },
            { name: 'removeUselessDefs' },
            { name: 'removeEditorsNSData' },
            { name: 'removeEmptyAttrs' },
            { name: 'removeHiddenElems' },
            { name: 'removeEmptyText' },
            { name: 'removeViewBox' },
            { name: 'cleanupEnableBackground' },
            { name: 'minifyStyles' },
            { name: 'convertStyleToAttrs' },
            { name: 'convertColors' },
            { name: 'convertPathData' },
            { name: 'convertTransform' },
            { name: 'removeUnknownsAndDefaults' },
            { name: 'removeNonInheritableGroupAttrs' },
            {
                name: 'removeUselessStrokeAndFill',
                params: {
                    // https://github.com/svg/svgo/issues/727#issuecomment-303115276
                    removeNone: true,
                },
            },
            { name: 'removeUnusedNS' },
            { name: 'cleanupIDs' },
            { name: 'cleanupNumericValues' },
            { name: 'cleanupListOfValues' },
            { name: 'moveElemsAttrsToGroup' },
            { name: 'moveGroupAttrsToElems' },
            { name: 'collapseGroups' },
            { name: 'removeRasterImages' },
            { name: 'mergePaths' },
            { name: 'convertShapeToPath' },
            { name: 'sortAttrs' },
            { name: 'removeDimensions' },
            { name: 'removeElementsByAttr' },
            { name: 'removeStyleElement' },
            { name: 'removeScriptElement' },
            { name: 'removeEmptyContainers' },
        ],
    });

    if (!isOptimizedImage(result)) {
        console.error(result.error);

        return null;
    }

    return result.data;
};

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

const downloadIcon = async (icon: IconMetadata) => {
    const resources = normalizedFamilies.map(async (family, index) => {
        const svg = await fetchIconVariant(icon, family);

        const optimizedSvg = optimizeSvg(svg);

        if (optimizedSvg !== null) {
            await writeFile(`./icons/${icon.name}${prefixes[index]}.svg`, optimizedSvg);

            const componentName = getComponentName(`${icon.name}${prefixes[index]}`);
            const component = await transformToReactComponent(
                optimizedSvg,
                {
                    typescript: true,
                    native: true,
                    prettier: false,
                },
                { componentName },
            );

            const formattedComponentOutput = format(component, {
                tabWidth: 4,
                printWidth: 120,
                trailingComma: 'all',
                singleQuote: true,
                useTabs: false,
                arrowParens: 'always',
                bracketSameLine: false,
                bracketSpacing: true,
                embeddedLanguageFormatting: 'auto',
                jsxSingleQuote: false,
                endOfLine: 'auto',
                parser: 'typescript',
            });

            await writeFile(`./src/${componentName}.tsx`, formattedComponentOutput);
        }
    });

    await Promise.all(resources);
};

try {
    await rm('src', { recursive: true, force: true });
    await rm('icons', { recursive: true, force: true });

    await mkdir('src');
    await mkdir('icons');

    await runConcurrently(metadata.icons, downloadIcon);
} catch (error: unknown) {
    console.error(error);
}
