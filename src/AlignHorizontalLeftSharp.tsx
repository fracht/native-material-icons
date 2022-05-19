import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlignHorizontalLeftSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z" />
    </Svg>
);

export default AlignHorizontalLeftSharp;
