import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const Man = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default Man;
