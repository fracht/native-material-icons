import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WarningAmberTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
    </Svg>
);

export default WarningAmberTwoTone;
