import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewStreamSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 19v-6h18v6H3zM3 5v6h18V5H3z" />
    </Svg>
);

export default ViewStreamSharp;
