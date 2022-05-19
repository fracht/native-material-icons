import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowDownwardSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </Svg>
);

export default ArrowDownwardSharp;
