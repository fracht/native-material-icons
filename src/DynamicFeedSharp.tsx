import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DynamicFeedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 8H6v9h11v-2H8z" />
        <Path d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z" />
    </Svg>
);

export default DynamicFeedSharp;
