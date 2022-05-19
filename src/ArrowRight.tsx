import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowRight = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m10 17 5-5-5-5v10z" />
    </Svg>
);

export default ArrowRight;
