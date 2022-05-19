import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MonitorSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 3H2v15h5l-1 1v2h12v-2l-1-1h5V3zm-2 13H4V5h16v11z" />
    </Svg>
);

export default MonitorSharp;
