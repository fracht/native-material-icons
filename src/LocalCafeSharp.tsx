import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LocalCafeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" />
    </Svg>
);

export default LocalCafeSharp;
