import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CurtainsClosedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zM11 5h2v14h-2V5z" />
    </Svg>
);

export default CurtainsClosedSharp;
