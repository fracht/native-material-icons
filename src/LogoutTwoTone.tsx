import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LogoutTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5zm16 7-4-4v3H9v2h8v3l4-4z" />
    </Svg>
);

export default LogoutTwoTone;
