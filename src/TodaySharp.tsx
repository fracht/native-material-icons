import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TodaySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h5v5H7v-5z" />
    </Svg>
);

export default TodaySharp;
