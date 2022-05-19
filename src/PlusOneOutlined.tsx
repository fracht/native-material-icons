import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlusOneOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z" />
    </Svg>
);

export default PlusOneOutlined;
