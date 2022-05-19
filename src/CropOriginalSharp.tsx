import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropOriginalSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
    </Svg>
);

export default CropOriginalSharp;
