import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowForwardSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </Svg>
);

export default ArrowForwardSharp;
