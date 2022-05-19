import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AutoAwesomeMotionSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 2H2v12h2V4h10V2zm4 4H6v12h2V8h10V6zm4 4H10v12h12V10z" />
    </Svg>
);

export default AutoAwesomeMotionSharp;
