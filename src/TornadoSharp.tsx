import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TornadoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zm11-5H5.05l1.74 3h10.42z" />
    </Svg>
);

export default TornadoSharp;
