import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BatteryThreeBarSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 4v18H7V4h3V2h4v2h3zm-2 2H9v8h6V6z" />
    </Svg>
);

export default BatteryThreeBarSharp;
