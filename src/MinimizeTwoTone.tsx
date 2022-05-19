import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MinimizeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 19h12v2H6v-2z" />
    </Svg>
);

export default MinimizeTwoTone;
