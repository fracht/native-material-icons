import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EmailTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m20 8-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity={0.3} />
        <Path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
    </Svg>
);

export default EmailTwoTone;
