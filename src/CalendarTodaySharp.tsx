import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CalendarTodaySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z" />
    </Svg>
);

export default CalendarTodaySharp;
