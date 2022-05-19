import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManTwoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 7H8v8h2.5v7h3v-7H16z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManTwoSharp;
