import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const GridViewSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z" />
    </Svg>
);

export default GridViewSharp;
