import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Pause = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </Svg>
);

export default Pause;
