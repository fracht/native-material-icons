import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayLessonSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 11c.34 0 .67.03 1 .08V2H3v20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7zM7 11V4h5v7L9.5 9.5 7 11z" />
        <Path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z" />
    </Svg>
);

export default PlayLessonSharp;
