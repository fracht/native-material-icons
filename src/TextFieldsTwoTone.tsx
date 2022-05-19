import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TextFieldsTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z" />
    </Svg>
);

export default TextFieldsTwoTone;
