import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

const ScatterPlotSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={7} cy={14} r={3} />
        <Circle cx={11} cy={6} r={3} />
        <Circle cx={16.6} cy={17.6} r={3} />
    </Svg>
);

export default ScatterPlotSharp;
