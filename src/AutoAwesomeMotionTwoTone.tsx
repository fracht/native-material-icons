import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AutoAwesomeMotionTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 12h8v8h-8z" opacity={0.3} />
        <Path d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10V2zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-8v-8h8v8z" />
        <Path d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10V6z" />
    </Svg>
);

export default AutoAwesomeMotionTwoTone;
