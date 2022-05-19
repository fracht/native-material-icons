import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AnnouncementSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
    </Svg>
);

export default AnnouncementSharp;
