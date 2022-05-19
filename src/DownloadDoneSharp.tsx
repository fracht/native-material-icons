import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DownloadDoneSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z" />
    </Svg>
);

export default DownloadDoneSharp;
