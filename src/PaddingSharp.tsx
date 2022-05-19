import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaddingSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3v18h18V3H3zm6 6H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z" />
    </Svg>
);

export default PaddingSharp;
