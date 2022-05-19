import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SimCardAlertSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z" />
    </Svg>
);

export default SimCardAlertSharp;
