import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NorthWestSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z" />
    </Svg>
);

export default NorthWestSharp;
