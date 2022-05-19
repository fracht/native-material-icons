import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VideocamTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 8h10v8H5z" opacity={0.3} />
        <Path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" />
    </Svg>
);

export default VideocamTwoTone;
