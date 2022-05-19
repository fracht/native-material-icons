import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Dehaze = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
    </Svg>
);

export default Dehaze;
