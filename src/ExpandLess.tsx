import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ExpandLess = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </Svg>
);

export default ExpandLess;
