import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ExplicitSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
    </Svg>
);

export default ExplicitSharp;
