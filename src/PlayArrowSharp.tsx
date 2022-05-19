import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayArrowSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 5v14l11-7L8 5z" />
    </Svg>
);

export default PlayArrowSharp;
