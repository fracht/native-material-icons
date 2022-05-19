import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SdCardSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" />
    </Svg>
);

export default SdCardSharp;
