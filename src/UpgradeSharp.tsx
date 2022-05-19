import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UpgradeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z" />
    </Svg>
);

export default UpgradeSharp;
