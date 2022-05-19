import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AutoAwesomeMosaicSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 21h8V3H3v18zM21 3h-8v8h8V3zm-8 18h8v-8h-8v8z" />
    </Svg>
);

export default AutoAwesomeMosaicSharp;
