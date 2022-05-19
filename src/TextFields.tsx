import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TextFields = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
    </Svg>
);

export default TextFields;
