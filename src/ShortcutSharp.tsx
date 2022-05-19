import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ShortcutSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5l6-6z" />
    </Svg>
);

export default ShortcutSharp;
