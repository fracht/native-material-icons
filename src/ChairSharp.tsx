import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChairSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 13h10V7h3V3H4v4h3z" />
        <Path d="M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3V9z" />
    </Svg>
);

export default ChairSharp;
