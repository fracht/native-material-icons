import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PhonelinkSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z" />
    </Svg>
);

export default PhonelinkSharp;
