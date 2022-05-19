import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TrendingFlatOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m22 12-4-4v3H3v2h15v3l4-4z" />
    </Svg>
);

export default TrendingFlatOutlined;
