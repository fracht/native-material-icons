import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalDistributeOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z" />
    </Svg>
);

export default VerticalDistributeOutlined;
