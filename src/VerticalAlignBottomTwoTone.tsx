import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalAlignBottomTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z" />
    </Svg>
);

export default VerticalAlignBottomTwoTone;
