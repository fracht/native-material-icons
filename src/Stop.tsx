import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Stop = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 6h12v12H6z" />
    </Svg>
);

export default Stop;
