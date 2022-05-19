import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksOneSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z" />
    </Svg>
);

export default LooksOneSharp;
