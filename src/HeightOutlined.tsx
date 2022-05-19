import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeightOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z" />
    </Svg>
);

export default HeightOutlined;
