import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MeetingRoomSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z" />
    </Svg>
);

export default MeetingRoomSharp;
