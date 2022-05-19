import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DownloadOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
    </Svg>
);

export default DownloadOutlined;
