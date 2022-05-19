import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Download = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
    </Svg>
);

export default Download;
