import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckBoxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </Svg>
);

export default CheckBoxSharp;
