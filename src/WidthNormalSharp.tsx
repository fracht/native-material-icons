import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WidthNormalSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zM4 6h4v12H4V6zm16 12h-4V6h4v12z" />
    </Svg>
);

export default WidthNormalSharp;
