import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DesktopMacSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9V2zm-2 12H3V4h18v10z" />
    </Svg>
);

export default DesktopMacSharp;
