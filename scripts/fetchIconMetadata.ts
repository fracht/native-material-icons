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
