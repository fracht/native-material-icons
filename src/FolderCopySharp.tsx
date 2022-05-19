import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderCopySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 6H1v15h19v-2H3z" />
        <Path d="M23 4h-9l-2-2H5.01L5 17h18V4z" />
    </Svg>
);

export default FolderCopySharp;
