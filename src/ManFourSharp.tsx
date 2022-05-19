import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManFourSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7.96 7 10 22h4l2.04-15z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManFourSharp;
