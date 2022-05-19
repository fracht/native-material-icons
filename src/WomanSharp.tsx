import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const WomanSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13.41 7h-2.82L7 16h3v6h4v-6h3z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default WomanSharp;
