import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ElectricCarOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.85 3h10.29l1.08 3.11H5.77L6.85 3zM19 13H5V8h14v5z" />
        <Circle cx={7.5} cy={10.5} r={1.5} />
        <Circle cx={16.5} cy={10.5} r={1.5} />
        <Path d="M7 20h4v-2l6 3h-4v2z" />
    </Svg>
);

export default ElectricCarOutlined;
