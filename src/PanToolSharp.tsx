import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PanToolSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4h3z" />
    </Svg>
);

export default PanToolSharp;
