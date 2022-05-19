import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StarRateSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z" />
    </Svg>
);

export default StarRateSharp;
