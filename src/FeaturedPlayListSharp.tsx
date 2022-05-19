import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FeaturedPlayListSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z" />
    </Svg>
);

export default FeaturedPlayListSharp;
