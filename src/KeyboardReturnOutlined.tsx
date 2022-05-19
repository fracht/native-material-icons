import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardReturnOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z" />
    </Svg>
);

export default KeyboardReturnOutlined;
