import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UploadFileSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 2H4v20h16V8l-6-6zm-1 13v4h-2v-4H8l4.01-4L16 15h-3zm0-6V3.5L18.5 9H13z" />
    </Svg>
);

export default UploadFileSharp;
