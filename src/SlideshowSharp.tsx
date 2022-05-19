import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SlideshowSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z" />
    </Svg>
);

export default SlideshowSharp;
