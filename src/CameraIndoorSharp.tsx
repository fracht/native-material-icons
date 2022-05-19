import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CameraIndoorSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 3 4 9v12h16V9l-8-6zm4 13.06L14 15v2H8v-6h6v2l2-1.06v4.12z" />
    </Svg>
);

export default CameraIndoorSharp;
