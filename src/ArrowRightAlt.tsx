import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowRightAlt = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </Svg>
);

export default ArrowRightAlt;
