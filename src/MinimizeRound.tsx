import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MinimizeRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </Svg>
);

export default MinimizeRound;
