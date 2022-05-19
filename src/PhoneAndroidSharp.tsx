import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PhoneAndroidSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 1H5v22h14V1zm-5 20h-4v-1h4v1zm3-3H7V4h10v14z" />
    </Svg>
);

export default PhoneAndroidSharp;
