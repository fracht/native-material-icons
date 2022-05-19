import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const PriorityHigh = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={19} r={2} />
        <Path d="M10 3h4v12h-4z" />
    </Svg>
);

export default PriorityHigh;
