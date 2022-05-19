import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatQuote = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </Svg>
);

export default FormatQuote;
