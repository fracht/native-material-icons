import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewColumnOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z" />
    </Svg>
);

export default ViewColumnOutlined;
