import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoorSlidingSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z" />
    </Svg>
);

export default DoorSlidingSharp;
