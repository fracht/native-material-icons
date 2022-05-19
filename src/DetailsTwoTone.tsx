import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DetailsTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 8.92 18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" opacity={0.3} />
        <Path d="M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" />
    </Svg>
);

export default DetailsTwoTone;
