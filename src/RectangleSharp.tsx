import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RectangleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 4h20v16H2z" />
    </Svg>
);

export default RectangleSharp;
