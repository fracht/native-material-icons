import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ForumSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z" />
    </Svg>
);

export default ForumSharp;
