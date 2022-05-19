import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowDropDownOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m7 10 5 5 5-5H7z" />
    </Svg>
);

export default ArrowDropDownOutlined;
