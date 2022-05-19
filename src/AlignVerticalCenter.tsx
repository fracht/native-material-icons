import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlignVerticalCenter = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z" />
    </Svg>
);

export default AlignVerticalCenter;
