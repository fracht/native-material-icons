import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HorizontalSplitSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
    </Svg>
);

export default HorizontalSplitSharp;
