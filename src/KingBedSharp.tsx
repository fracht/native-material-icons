import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KingBedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 10V5H4v5H2v7h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-7h-2zm-9 0H6V7h5v3zm7 0h-5V7h5v3z" />
    </Svg>
);

export default KingBedSharp;
