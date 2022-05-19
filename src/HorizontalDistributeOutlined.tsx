import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HorizontalDistributeOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z" />
    </Svg>
);

export default HorizontalDistributeOutlined;
