import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RectangleRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z" />
    </Svg>
);

export default RectangleRound;
