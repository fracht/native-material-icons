import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatItalicSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
    </Svg>
);

export default FormatItalicSharp;
