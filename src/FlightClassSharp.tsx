import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlightClassSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 4h-6v9h6V4zM9.5 16H18v2H8L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z" />
    </Svg>
);

export default FlightClassSharp;
