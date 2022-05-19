import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PolylineSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z" />
    </Svg>
);

export default PolylineSharp;
