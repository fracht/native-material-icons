import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LogoutSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 5h7V3H3v18h9v-2H5z" />
        <Path d="m21 12-4-4v3H9v2h8v3z" />
    </Svg>
);

export default LogoutSharp;
