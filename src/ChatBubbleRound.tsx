import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChatBubbleRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default ChatBubbleRound;
