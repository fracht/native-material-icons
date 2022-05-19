import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManTwoTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2.5v7h3v-7H16V9c0-1.1-.9-2-2-2z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManTwoTwoTone;
