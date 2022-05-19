import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ElectricBoltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z" />
    </Svg>
);

export default ElectricBoltSharp;
