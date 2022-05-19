import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const QuickreplySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h9v-8h7z" />
        <Path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z" />
    </Svg>
);

export default QuickreplySharp;
