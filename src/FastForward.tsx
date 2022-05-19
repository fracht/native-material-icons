import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FastForward = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    </Svg>
);

export default FastForward;
