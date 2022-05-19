import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PolymerTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z" />
    </Svg>
);

export default PolymerTwoTone;
