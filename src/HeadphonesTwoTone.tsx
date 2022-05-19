import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeadphonesTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 15h2v4H5zm12 0h2v4h-2z" opacity={0.3} />
        <Path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z" />
    </Svg>
);

export default HeadphonesTwoTone;
