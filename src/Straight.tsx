import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Straight = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z" />
    </Svg>
);

export default Straight;
