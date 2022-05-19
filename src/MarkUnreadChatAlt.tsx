import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const MarkUnreadChatAlt = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={19} cy={3} r={3} />
        <Path d="M6 8V6h9.03c-1.21-1.6-1.08-3.21-.92-4H4.01c-1.1 0-2 .89-2 2L2 22l4-4h14c1.1 0 2-.9 2-2V6.97C21.16 7.61 20.13 8 19 8H6zm8 6H6v-2h8v2zm4-3H6V9h12v2z" />
    </Svg>
);

export default MarkUnreadChatAlt;
