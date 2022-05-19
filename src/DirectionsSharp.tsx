import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DirectionsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22.41 12 12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z" />
    </Svg>
);

export default DirectionsSharp;
