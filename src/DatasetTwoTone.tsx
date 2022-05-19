import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DatasetTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 19h14V5H5v14zm8-12h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z" opacity={0.3} />
        <Path d="M7 13h4v4H7zm6 0h4v4h-4z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <Path d="M7 7h4v4H7zm6 0h4v4h-4z" />
    </Svg>
);

export default DatasetTwoTone;
