import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const CoPresent = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        <Circle cx={9} cy={10} r={4} />
        <Path d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z" />
    </Svg>
);

export default CoPresent;
