import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoubleArrowSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
        <Path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
    </Svg>
);

export default DoubleArrowSharp;
