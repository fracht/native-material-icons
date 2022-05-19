import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SyncAltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z" />
    </Svg>
);

export default SyncAltSharp;
