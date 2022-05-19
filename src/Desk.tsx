import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Desk = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z" />
    </Svg>
);

export default Desk;
