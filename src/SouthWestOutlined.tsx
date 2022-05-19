import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SouthWestOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" />
    </Svg>
);

export default SouthWestOutlined;
