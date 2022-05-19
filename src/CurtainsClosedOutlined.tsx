import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CurtainsClosedOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5v14h-2V5h2zM6 5h3v14H6V5zm9 14V5h3v14h-3z" />
    </Svg>
);

export default CurtainsClosedOutlined;
