import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

const NoiseControlOff = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={12} r={5} />
    </Svg>
);

export default NoiseControlOff;
