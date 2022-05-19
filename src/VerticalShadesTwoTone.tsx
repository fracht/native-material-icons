import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalShadesTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 5h2v14H6zm10 0h2v14h-2z" opacity={0.3} />
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zM8 19H6V5h2v14zm6 0h-4V5h4v14zm4 0h-2V5h2v14z" />
    </Svg>
);

export default VerticalShadesTwoTone;
