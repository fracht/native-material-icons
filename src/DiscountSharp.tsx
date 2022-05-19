import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DiscountSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12.79 21 3 11.21v2.83l9.79 9.79 9.04-9.04-1.42-1.41z" />
        <Path d="m3 9.04 9.79 9.79 9.04-9.04L12.04 0H3v9.04zM7.25 3c.69 0 1.25.56 1.25 1.25S7.94 5.5 7.25 5.5 6 4.94 6 4.25 6.56 3 7.25 3z" />
    </Svg>
);

export default DiscountSharp;
