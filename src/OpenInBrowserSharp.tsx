import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OpenInBrowserSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6-4 4h3v6h2v-6h3l-4-4z" />
    </Svg>
);

export default OpenInBrowserSharp;
