import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BrokenImageSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42 3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z" />
    </Svg>
);

export default BrokenImageSharp;
