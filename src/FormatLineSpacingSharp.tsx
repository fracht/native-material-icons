import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatLineSpacingSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" />
    </Svg>
);

export default FormatLineSpacingSharp;
