import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ApprovalSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 14v8h16v-8H4zm14 4H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5z" />
    </Svg>
);

export default ApprovalSharp;
