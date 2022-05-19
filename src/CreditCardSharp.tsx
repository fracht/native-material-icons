import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CreditCardSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2.01L2 20h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </Svg>
);

export default CreditCardSharp;
