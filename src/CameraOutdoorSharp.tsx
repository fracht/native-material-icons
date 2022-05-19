import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CameraOutdoorSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z" />
    </Svg>
);

export default CameraOutdoorSharp;
