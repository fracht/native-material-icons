import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallMissedTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z" />
    </Svg>
);

export default CallMissedTwoTone;
