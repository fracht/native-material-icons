import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VideocamOffSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86 2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" />
    </Svg>
);

export default VideocamOffSharp;
