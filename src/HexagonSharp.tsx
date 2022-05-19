import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HexagonSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" />
    </Svg>
);

export default HexagonSharp;
