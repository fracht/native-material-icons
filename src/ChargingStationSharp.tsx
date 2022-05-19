import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChargingStationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m14.5 11-3 6v-4h-2l3-6v4h2zM5 1h14v22H5V1zm2 5v12h10V6H7z" />
    </Svg>
);

export default ChargingStationSharp;
