import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowDropUp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m7 14 5-5 5 5z" />
    </Svg>
);

export default ArrowDropUp;
