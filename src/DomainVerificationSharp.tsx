import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DomainVerificationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z" />
        <Path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" />
    </Svg>
);

export default DomainVerificationSharp;
