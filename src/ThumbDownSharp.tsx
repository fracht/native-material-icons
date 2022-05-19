import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ThumbDownSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9.83 23 17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z" />
    </Svg>
);

export default ThumbDownSharp;
