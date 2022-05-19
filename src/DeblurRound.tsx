import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const DeblurRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 3v18c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
        <Circle cx={6} cy={14} r={1} />
        <Circle cx={6} cy={18} r={1} />
        <Circle cx={6} cy={10} r={1} />
        <Circle cx={3} cy={10} r={0.5} />
        <Circle cx={6} cy={6} r={1} />
        <Circle cx={3} cy={14} r={0.5} />
        <Circle cx={10} cy={21} r={0.5} />
        <Circle cx={10} cy={3} r={0.5} />
        <Circle cx={10} cy={6} r={1} />
        <Circle cx={10} cy={14} r={1.5} />
        <Circle cx={10} cy={10} r={1.5} />
        <Circle cx={10} cy={18} r={1} />
    </Svg>
);

export default DeblurRound;
