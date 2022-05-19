import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SystemUpdateSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z" />
    </Svg>
);

export default SystemUpdateSharp;
