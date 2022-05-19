import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewArraySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z" />
    </Svg>
);

export default ViewArraySharp;
