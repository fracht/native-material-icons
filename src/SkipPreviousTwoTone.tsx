import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SkipPreviousTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 14.14V9.86L12.97 12z" opacity={0.3} />
        <Path d="M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" />
    </Svg>
);

export default SkipPreviousTwoTone;
