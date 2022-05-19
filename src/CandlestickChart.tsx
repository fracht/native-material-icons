import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CandlestickChart = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z" />
    </Svg>
);

export default CandlestickChart;
