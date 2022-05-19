import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlashOnTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 10h-4l3-8H7v11h3v9z" />
    </Svg>
);

export default FlashOnTwoTone;
