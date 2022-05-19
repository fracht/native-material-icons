import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowUpwardOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </Svg>
);

export default ArrowUpwardOutlined;
