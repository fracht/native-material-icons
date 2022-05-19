import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </Svg>
);

export default CheckTwoTone;
