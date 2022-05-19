import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChevronLeftOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </Svg>
);

export default ChevronLeftOutlined;
