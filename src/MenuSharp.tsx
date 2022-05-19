import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MenuSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
);

export default MenuSharp;
