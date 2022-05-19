import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HourglassFullSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" />
    </Svg>
);

export default HourglassFullSharp;
