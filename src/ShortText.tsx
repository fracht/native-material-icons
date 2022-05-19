import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ShortText = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" />
    </Svg>
);

export default ShortText;
