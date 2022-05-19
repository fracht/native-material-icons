import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VideocamSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
    </Svg>
);

export default VideocamSharp;
