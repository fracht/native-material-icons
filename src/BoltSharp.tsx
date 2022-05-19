import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BoltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28L11 21z" />
    </Svg>
);

export default BoltSharp;
