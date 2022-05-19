import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropThree2Sharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" />
    </Svg>
);

export default CropThree2Sharp;
