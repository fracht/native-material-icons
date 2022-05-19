import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ExpandSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 20h16v2H4v-2zM4 2h16v2H4V2zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3V9z" />
    </Svg>
);

export default ExpandSharp;
