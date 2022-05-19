import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WebAssetSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" />
    </Svg>
);

export default WebAssetSharp;
