import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

const WifiOneBarRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={18} r={2} />
    </Svg>
);

export default WifiOneBarRound;
