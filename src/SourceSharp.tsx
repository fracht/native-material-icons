import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SourceSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 6-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z" />
    </Svg>
);

export default SourceSharp;
