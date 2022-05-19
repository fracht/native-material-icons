import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FeaturedVideoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 3H1v18h22V3zm-11 9H3V5h9v7z" />
    </Svg>
);

export default FeaturedVideoSharp;
