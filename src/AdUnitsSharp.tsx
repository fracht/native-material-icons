import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AdUnitsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z" />
        <Path d="M8 6h8v2H8z" />
    </Svg>
);

export default AdUnitsSharp;
