import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WebStoriesSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z" />
    </Svg>
);

export default WebStoriesSharp;
