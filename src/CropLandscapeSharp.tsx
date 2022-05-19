import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropLandscapeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z" />
    </Svg>
);

export default CropLandscapeSharp;
