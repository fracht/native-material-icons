import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PermMediaSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 6H0v16h20v-2H2V6zm22-2H14l-2-2H4v16h20V4zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z" />
    </Svg>
);

export default PermMediaSharp;
