import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Forward = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 8V4l8 8-8 8v-4H4V8z" />
    </Svg>
);

export default Forward;
