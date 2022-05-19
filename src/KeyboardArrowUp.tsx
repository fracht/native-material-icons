import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardArrowUp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </Svg>
);

export default KeyboardArrowUp;
