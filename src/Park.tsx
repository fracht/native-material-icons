import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Park = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z" />
    </Svg>
);

export default Park;
