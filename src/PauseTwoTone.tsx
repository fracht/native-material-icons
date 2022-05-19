import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PauseTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    </Svg>
);

export default PauseTwoTone;
