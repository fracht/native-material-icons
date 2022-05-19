import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SouthEastSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z" />
    </Svg>
);

export default SouthEastSharp;
