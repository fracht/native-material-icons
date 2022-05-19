import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ShowChartTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z" />
    </Svg>
);

export default ShowChartTwoTone;
