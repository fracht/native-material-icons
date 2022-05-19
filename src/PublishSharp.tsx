import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PublishSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
    </Svg>
);

export default PublishSharp;
