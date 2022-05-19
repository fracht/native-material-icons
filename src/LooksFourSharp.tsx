import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksFourSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z" />
    </Svg>
);

export default LooksFourSharp;
