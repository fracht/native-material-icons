import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayArrowOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
    </Svg>
);

export default PlayArrowOutlined;
