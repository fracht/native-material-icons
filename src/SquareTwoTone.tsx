import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SquareTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 5h14v14H5z" opacity={0.3} />
        <Path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    </Svg>
);

export default SquareTwoTone;
