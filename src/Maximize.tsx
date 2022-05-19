import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Maximize = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3h18v2H3z" />
    </Svg>
);

export default Maximize;
