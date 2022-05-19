import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChatBubbleOutlineSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" />
    </Svg>
);

export default ChatBubbleOutlineSharp;
