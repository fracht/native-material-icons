import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewHeadlineSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
    </Svg>
);

export default ViewHeadlineSharp;
