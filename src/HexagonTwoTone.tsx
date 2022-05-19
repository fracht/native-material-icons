import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HexagonTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16.05 19h-8.1l-4.04-7 4.04-7h8.1l4.04 7z" opacity={0.3} />
        <Path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z" />
    </Svg>
);

export default HexagonTwoTone;
