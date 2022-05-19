import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Leaderboard = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z" />
    </Svg>
);

export default Leaderboard;
