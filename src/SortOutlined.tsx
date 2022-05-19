import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SortOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </Svg>
);

export default SortOutlined;
