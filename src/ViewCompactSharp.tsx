import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewCompactSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
    </Svg>
);

export default ViewCompactSharp;
