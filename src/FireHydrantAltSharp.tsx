import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const FireHydrantAltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 11h-3V8h2V6h-2.35c-.82-2.33-3.04-4-5.65-4S7.17 3.67 6.35 6H4v2h2v3H3v6h3v3H4v2h16v-2h-2v-3h3v-6zm-9 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        <Circle cx={12} cy={14} r={1.5} />
    </Svg>
);

export default FireHydrantAltSharp;
