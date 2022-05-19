import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayArrowTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
        <Path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
    </Svg>
);

export default PlayArrowTwoTone;
