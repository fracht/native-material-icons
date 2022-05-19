import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Gite = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z" />
    </Svg>
);

export default Gite;
