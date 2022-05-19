import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PanoramaSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 20V4H1v16h22zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" />
    </Svg>
);

export default PanoramaSharp;
