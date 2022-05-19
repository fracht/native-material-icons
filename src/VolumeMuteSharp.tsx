import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VolumeMuteSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </Svg>
);

export default VolumeMuteSharp;
