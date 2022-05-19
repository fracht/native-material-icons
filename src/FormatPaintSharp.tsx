import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatPaintSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" />
    </Svg>
);

export default FormatPaintSharp;
