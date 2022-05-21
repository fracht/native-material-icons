import { writeFile, rm, mkdir } from 'fs/promises';
import { optimize as svgoOptimize, OptimizedError as SvgoError, OptimizedSvg } from 'svgo';
import { runConcurrently } from './runConcurrently';

export type IconMetadata = {
    name: string;
    version: number;
    popularity: number;
    codepoint: number;
    unsupported_families: string[];
    categories: string[];
    tags: string[];
    size_px: number[];
};

export type MaterialIconMetadata = {
    host: string;
    asset_url_pattern: string;
    families: string[];
    icons: IconMetadata[];
};

export const fetchIconMetadata = async () => {
    const BASE_URL = 'https://fonts.google.com';
    const url = new URL('metadata/icons', BASE_URL);
    const response = await fetch(url);
    const text = await response.text();

    const metadata: MaterialIconMetadata = JSON.parse(text.replace(")]}'", '')) as MaterialIconMetadata;

    return metadata;
};

const metadata = await fetchIconMetadata();
const normalizedFamilies = metadata.families.map((family) => family.toLowerCase().replace(/\s+/g, ''));
const prefixes = metadata.families.map((family) =>
    family.toLowerCase().replace('material icons', '').replace(/\s+/g, '_'),
);

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

const ignored = new Set(['add_chart']);

const isOptimizedImage = (value: unknown): value is OptimizedSvg => {
    return typeof (value as OptimizedSvg).data === 'string';
};

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

const downloadIcon = async (icon: IconMetadata) => {
    const resources = normalizedFamilies.map(async (family, index) => {
        const svg = await fetchIconVariant(icon, family);

        const optimizedSvg = optimizeSvg(svg);

        if (optimizedSvg !== null) {
            await writeFile(`./icons/${icon.name}${prefixes[index]}.svg`, optimizedSvg);
        }
    });

    await Promise.all(resources);
};

try {
    await rm('icons', { recursive: true, force: true });

    await mkdir('icons');

    const { total, failed, succeed } = await runConcurrently(
        metadata.icons.filter((value) => !ignored.has(value.name)),
        downloadIcon,
    );

    console.log(`Ran ${total} in parallel, ${succeed} succeed, ${failed} failed.`);
} catch (error: unknown) {
    console.error(error);
}
