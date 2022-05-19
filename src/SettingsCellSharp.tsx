import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SettingsCellSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM6 0v20h12V0H6zm10 16H8V4h8v12z" />
    </Svg>
);

export default SettingsCellSharp;
