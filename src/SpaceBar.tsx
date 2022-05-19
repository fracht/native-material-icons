import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SpaceBar = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 9v4H6V9H4v6h16V9z" />
    </Svg>
);

export default SpaceBar;
