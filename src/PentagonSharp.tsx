import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PentagonSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m2 9 4 12h12l4-12-10-7z" />
    </Svg>
);

export default PentagonSharp;
