import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatSizeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z" />
    </Svg>
);

export default FormatSizeTwoTone;
