import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SouthWestRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z" />
    </Svg>
);

export default SouthWestRound;
