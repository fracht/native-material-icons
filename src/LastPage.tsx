import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LastPage = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
    </Svg>
);

export default LastPage;
