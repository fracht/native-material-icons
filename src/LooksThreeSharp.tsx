import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksThreeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3.01v18H21V3zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01v10z" />
    </Svg>
);

export default LooksThreeSharp;
