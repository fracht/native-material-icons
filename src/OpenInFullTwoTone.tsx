import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OpenInFullTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z" />
    </Svg>
);

export default OpenInFullTwoTone;
