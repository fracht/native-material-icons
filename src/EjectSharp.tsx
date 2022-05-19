import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EjectSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" />
    </Svg>
);

export default EjectSharp;
