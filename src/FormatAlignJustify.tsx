import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatAlignJustify = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
    </Svg>
);

export default FormatAlignJustify;
