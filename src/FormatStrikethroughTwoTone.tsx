import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatStrikethroughTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z" />
    </Svg>
);

export default FormatStrikethroughTwoTone;
