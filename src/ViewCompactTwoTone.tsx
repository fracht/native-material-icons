import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewCompactTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z" opacity={0.3} />
        <Path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z" />
    </Svg>
);

export default ViewCompactTwoTone;
