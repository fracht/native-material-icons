import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BackupTableSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 6v14H6v2h16V6z" />
        <Path d="M18 2H2v16h16V2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z" />
    </Svg>
);

export default BackupTableSharp;
