import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlignVerticalBottomSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z" />
    </Svg>
);

export default AlignVerticalBottomSharp;
