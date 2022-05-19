import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PollSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3v18h18V3H3zm6 14H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </Svg>
);

export default PollSharp;
