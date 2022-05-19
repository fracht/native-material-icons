import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatQuoteSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z" />
    </Svg>
);

export default FormatQuoteSharp;
