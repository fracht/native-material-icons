import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SkipNext = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </Svg>
);

export default SkipNext;
