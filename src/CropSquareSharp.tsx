import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropSquareSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" />
    </Svg>
);

export default CropSquareSharp;
