import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BarChart = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
    </Svg>
);

export default BarChart;
