import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ThirtyfpsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z" />
    </Svg>
);

export default ThirtyfpsSharp;
