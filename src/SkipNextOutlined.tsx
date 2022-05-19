import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SkipNextOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m6 18 8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
    </Svg>
);

export default SkipNextOutlined;
