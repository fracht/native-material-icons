import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LanSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z" />
    </Svg>
);

export default LanSharp;
