import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UploadSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" />
    </Svg>
);

export default UploadSharp;
