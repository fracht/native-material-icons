import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalSplitTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 7h4v10h-4z" opacity={0.3} />
        <Path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z" />
    </Svg>
);

export default VerticalSplitTwoTone;
