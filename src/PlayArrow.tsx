import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayArrow = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 5v14l11-7z" />
    </Svg>
);

export default PlayArrow;
