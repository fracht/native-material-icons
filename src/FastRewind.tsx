import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FastRewind = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z" />
    </Svg>
);

export default FastRewind;
