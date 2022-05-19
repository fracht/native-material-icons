import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlumbingSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m16.16 5.64 3.54 3.54c1.17-1.17 1.17-3.07 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12 2.12-2.12zM4.842 12.7081l3.5355-3.5355 2.1213 2.1213-3.5355 3.5355z" />
        <Path d="m15.45 7.76-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l.71.71 1.41-1.41-3.53-3.54z" />
    </Svg>
);

export default PlumbingSharp;
