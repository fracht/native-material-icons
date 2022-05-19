import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TextSnippetSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m21 9-6-6H3v18h18V9zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z" />
    </Svg>
);

export default TextSnippetSharp;
