import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 7H8v8h2v7h4v-7h2z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManSharp;
