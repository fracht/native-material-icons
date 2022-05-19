import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardArrowDown = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </Svg>
);

export default KeyboardArrowDown;
