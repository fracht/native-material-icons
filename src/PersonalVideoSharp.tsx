import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PersonalVideoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12z" />
    </Svg>
);

export default PersonalVideoSharp;
