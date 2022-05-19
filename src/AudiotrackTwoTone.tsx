import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const AudiotrackTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={10} cy={17} r={2} opacity={0.3} />
        <Path d="M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </Svg>
);

export default AudiotrackTwoTone;
