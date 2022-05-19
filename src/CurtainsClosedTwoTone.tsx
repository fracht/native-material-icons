import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CurtainsClosedTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 5h3v14H6zm9 0h3v14h-3z" opacity={0.3} />
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zM9 19H6V5h3v14zm4 0h-2V5h2v14zm5 0h-3V5h3v14z" />
    </Svg>
);

export default CurtainsClosedTwoTone;
