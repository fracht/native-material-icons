import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TrendingDownSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z" />
    </Svg>
);

export default TrendingDownSharp;
