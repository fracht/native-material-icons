import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArticleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3v18h18V3H3zm11 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </Svg>
);

export default ArticleSharp;
