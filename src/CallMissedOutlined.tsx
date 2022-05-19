import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallMissedOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z" />
    </Svg>
);

export default CallMissedOutlined;
