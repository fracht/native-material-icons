import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NearMe = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
);

export default NearMe;
