import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalSplitSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z" />
    </Svg>
);

export default VerticalSplitSharp;
