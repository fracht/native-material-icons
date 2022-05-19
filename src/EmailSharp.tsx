import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EmailSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zm-2 4-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
);

export default EmailSharp;
