import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HorizontalRuleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path fillRule="evenodd" d="M4 11h16v2H4z" />
    </Svg>
);

export default HorizontalRuleSharp;
