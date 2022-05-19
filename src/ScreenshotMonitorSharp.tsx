import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ScreenshotMonitorSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z" />
        <Path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z" />
    </Svg>
);

export default ScreenshotMonitorSharp;
