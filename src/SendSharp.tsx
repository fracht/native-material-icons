import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SendSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7z" />
    </Svg>
);

export default SendSharp;
