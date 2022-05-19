import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EscalatorSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8v3z" />
    </Svg>
);

export default EscalatorSharp;
