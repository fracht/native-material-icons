import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SkipPreviousOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z" />
    </Svg>
);

export default SkipPreviousOutlined;
