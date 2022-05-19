import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FeedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 3H3v18h18V8l-5-5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2zm-2-4V5l4 4h-4z" />
    </Svg>
);

export default FeedSharp;
