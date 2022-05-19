import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RemoveRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </Svg>
);

export default RemoveRound;
