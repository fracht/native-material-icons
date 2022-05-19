import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksSixSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 15h2v-2h-2v2zM21 3H3v18h18V3zm-6 6h-4v2h4v6H9V7h6v2z" />
    </Svg>
);

export default LooksSixSharp;
