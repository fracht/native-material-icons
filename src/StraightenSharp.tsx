import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StraightenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
    </Svg>
);

export default StraightenSharp;
