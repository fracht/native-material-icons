import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DockSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 23h8v-2H8v2zM18 1.01 6 1v18h12V1.01zM16 15H8V5h8v10z" />
    </Svg>
);

export default DockSharp;
