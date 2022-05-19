import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlashOn = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </Svg>
);

export default FlashOn;
