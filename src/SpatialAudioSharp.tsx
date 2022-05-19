import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SpatialAudioSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={10} cy={9} r={4} />
        <Path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 1h-2c0 4.97 4.03 9 9 9V8c-3.86 0-7-3.14-7-7z" />
        <Path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z" />
    </Svg>
);

export default SpatialAudioSharp;
