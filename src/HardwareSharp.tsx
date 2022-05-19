import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HardwareSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3h-2zM9 13v8h6v-8H9z" />
    </Svg>
);

export default HardwareSharp;
