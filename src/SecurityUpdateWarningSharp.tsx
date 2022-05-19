import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SecurityUpdateWarningSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
        <Path d="M5.01 1v22H19V1H5.01zM17 18H7V6h10v12z" />
    </Svg>
);

export default SecurityUpdateWarningSharp;
