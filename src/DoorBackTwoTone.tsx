import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoorBackTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 19h10V5H7v14zm2-8h2v2H9v-2z" opacity={0.3} />
        <Path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z" />
        <Path d="M9 11h2v2H9z" />
    </Svg>
);

export default DoorBackTwoTone;
