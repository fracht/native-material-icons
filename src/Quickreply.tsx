import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Quickreply = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7V4z" />
        <Path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z" />
    </Svg>
);

export default Quickreply;
