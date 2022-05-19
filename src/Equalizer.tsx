import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Equalizer = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
    </Svg>
);

export default Equalizer;
