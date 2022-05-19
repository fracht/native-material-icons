import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NetworkCellTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z" />
    </Svg>
);

export default NetworkCellTwoTone;
