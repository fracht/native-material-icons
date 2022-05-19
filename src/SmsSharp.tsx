import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SmsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
    </Svg>
);

export default SmsSharp;
