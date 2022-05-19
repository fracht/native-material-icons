import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VoiceChatSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2.01L2 22l4-4h16V2zm-4 12-4-3.2V14H6V6h8v3.2L18 6v8z" />
    </Svg>
);

export default VoiceChatSharp;
