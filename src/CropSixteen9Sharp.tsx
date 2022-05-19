import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropSixteen9Sharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 6H3v12h18V6zm-2 10H5V8h14v8z" />
    </Svg>
);

export default CropSixteen9Sharp;
