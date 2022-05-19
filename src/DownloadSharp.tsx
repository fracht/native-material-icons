import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DownloadSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </Svg>
);

export default DownloadSharp;
