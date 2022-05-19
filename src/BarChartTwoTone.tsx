import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BarChartTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z" />
    </Svg>
);

export default BarChartTwoTone;
