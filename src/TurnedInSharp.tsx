import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnedInSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 3H5v18l7-3 7 3V3z" />
    </Svg>
);

export default TurnedInSharp;
