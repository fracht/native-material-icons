import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TableChartSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 10.02h5V21h-5V10.02zM17 21h5V10h-5v11zm5-18H3v5h19V3zM3 21h5V10H3v11z" />
    </Svg>
);

export default TableChartSharp;
