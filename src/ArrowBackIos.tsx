import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowBackIos = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </Svg>
);

export default ArrowBackIos;
