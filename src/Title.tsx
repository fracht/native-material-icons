import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Title = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 4v3h5.5v12h3V7H19V4z" />
    </Svg>
);

export default Title;
