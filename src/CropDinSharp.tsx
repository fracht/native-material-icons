import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropDinSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" />
    </Svg>
);

export default CropDinSharp;
