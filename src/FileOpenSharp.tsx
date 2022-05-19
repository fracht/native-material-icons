import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileOpenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 2H4v20h11v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z" />
    </Svg>
);

export default FileOpenSharp;
