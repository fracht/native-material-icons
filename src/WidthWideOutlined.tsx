import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WidthWideOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h2v12H4zm4 0V6h8v12H8zm12 0h-2V6h2v12z" />
    </Svg>
);

export default WidthWideOutlined;
