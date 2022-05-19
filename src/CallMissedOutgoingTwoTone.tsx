import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallMissedOutgoingTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z" />
    </Svg>
);

export default CallMissedOutgoingTwoTone;
