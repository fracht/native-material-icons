import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PictureInPictureAltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z" />
    </Svg>
);

export default PictureInPictureAltSharp;
