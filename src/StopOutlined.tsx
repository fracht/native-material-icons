import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StopOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 8v8H8V8h8m2-2H6v12h12V6z" />
    </Svg>
);

export default StopOutlined;
