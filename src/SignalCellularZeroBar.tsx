import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SignalCellularZeroBar = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z" />
    </Svg>
);

export default SignalCellularZeroBar;
