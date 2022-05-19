import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ImagesearchRoller = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2" />
    </Svg>
);

export default ImagesearchRoller;
