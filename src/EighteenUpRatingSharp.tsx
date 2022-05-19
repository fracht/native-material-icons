import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EighteenUpRatingSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z" />
        <Path d="M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z" />
    </Svg>
);

export default EighteenUpRatingSharp;
