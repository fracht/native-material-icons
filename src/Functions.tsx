import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Functions = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
    </Svg>
);

export default Functions;
