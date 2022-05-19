import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropPortraitSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 3H5v18h14V3zm-2 16H7V5h10v14z" />
    </Svg>
);

export default CropPortraitSharp;
