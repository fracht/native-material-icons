import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IndeterminateCheckBoxTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 19h14V5H5v14zm2-8h10v2H7v-2z" opacity={0.3} />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 11h10v2H7z" />
    </Svg>
);

export default IndeterminateCheckBoxTwoTone;
