import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Eject = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Svg>
);

export default Eject;
