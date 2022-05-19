import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VillaSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 21H3V8l13-5v7H7v11zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default VillaSharp;
