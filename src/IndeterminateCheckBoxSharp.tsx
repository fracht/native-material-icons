import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IndeterminateCheckBoxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z" />
    </Svg>
);

export default IndeterminateCheckBoxSharp;
