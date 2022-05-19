import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SignalCellularAlt = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
    </Svg>
);

export default SignalCellularAlt;
