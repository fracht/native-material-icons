import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatStrikethroughSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
    </Svg>
);

export default FormatStrikethroughSharp;
