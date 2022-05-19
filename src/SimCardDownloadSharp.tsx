import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SimCardDownloadSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H10L4 8v14h16V2zm-8 15-4-4h3V9.02L13 9v4h3l-4 4z" />
    </Svg>
);

export default SimCardDownloadSharp;
