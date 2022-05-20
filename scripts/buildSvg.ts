import { optimize as svgoOptimize } from 'svgo';

import stringifyObject from 'stringify-object';

const elementNameId = {
    Rect: 'a',
    Circle: 'b',
    Ellipse: 'd', // "c" is reserved by library
    Line: 'e',
    Polygon: 'f',
    Polyline: 'g',
    Path: 'i', // "h" is reserved by react
    Text: 'j',
    TSpan: 'k',
    TextPath: 'l',
    G: 'G',
    Use: 'n',
    Symbol: 'o',
    Defs: 'p',
    Image: 'q',
    ClipPath: 'r',
    LinearGradient: 's',
    RadialGradient: 't',
    Mask: 'u',
    Pattern: 'v',
    Marker: 'w',
    ForeignObject: 'y',
};

const capitalize = (value: string) => value.charAt(0).toUpperCase().concat(value.slice(1));
const uniq = <T>(array: T[]): T[] => [...new Set(array)];
const tinyStringifyObject = (object: unknown): string =>
    stringifyObject(object).replace(/\t|\n/g, '').replace(/: /g, ':');

const stringifyElement = (element: any, usedElements = new Set()) => {
    let stringifiedAttributes = tinyStringifyObject(element.attributes).slice(0, -1);

    usedElements.add(capitalize(element.name));
    if (element.children && element.children.length > 1) {
        stringifiedAttributes = stringifiedAttributes.concat(
            `,children:[${element.children.map((element, index) => {
                element.attributes.key = index;
                return stringifyElement(element, usedElements)[0];
            })}]}`,
        );
    } else if (element.children && element.children.length > 0) {
        stringifiedAttributes = stringifiedAttributes.concat(
            `,children:${stringifyElement(element.children[0], usedElements)[0]}}`,
        );
    } else {
        stringifiedAttributes = stringifiedAttributes.concat('}');
    }

    return [`h(${elementNameId[capitalize(element.name)]},${stringifiedAttributes})`, [...usedElements]];
};

export const buildSvg = (svg: string, componentName: string) => {
    const paths: Array<Record<string, string>> = [];
    let allSvgChildren: any[] = [];
    let hasOtherElements = false;

    svgoOptimize(svg, {
        plugins: [
            {
                name: 'svgToReact',
                type: 'full',
                fn(ast) {
                    const [svg, ...rootChildren] = ast.children;

                    if (rootChildren.length > 0) {
                        throw new Error('Expected a single child of the root');
                    }

                    if (svg.type !== 'element' && svg.name !== 'svg') {
                        throw new Error('Expected an svg element as the root child');
                    }

                    for (const [index, svgChild] of svg.children.entries()) {
                        if (svgChild.children.length > 0) {
                            console.log(componentName);
                        }

                        if (svgChild.name === 'path') {
                            paths.push({ ...svgChild.attributes });
                        } else {
                            hasOtherElements = true;
                        }

                        svgChild.attributes.key = index;
                    }

                    allSvgChildren = svg.children;

                    return ast;
                },
            },
        ],
    });

    if (hasOtherElements) {
        const results = allSvgChildren.map((element) => stringifyElement(element));

        const elementRegistry = uniq(results.flatMap(([, elements]) => elements));

        return `import{c}from'./u';import{${elementRegistry.map((value) => {
            const transformed = elementNameId[value as string];
            if (transformed === value) {
                return value;
            }

            return `${value} as ${transformed}`;
        })}}from'react-native-svg';import{jsx as h}from'react/jsx-runtime';export default c([${results.map(
            ([element]) => element,
        )}],'${componentName}')`;
    }

    if (paths.length === 1) {
        return `import{s}from'./u';export default s(${tinyStringifyObject(paths[0])},'${componentName}')`;
    }

    if (paths.length > 1) {
        return `import{m}from'./u';export default m([${paths.map(tinyStringifyObject)}],'${componentName}')`;
    }

    throw new Error('No found');
};
