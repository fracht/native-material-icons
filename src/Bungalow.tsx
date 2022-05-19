import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Bungalow = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06L12 3zm1 11h-2v-2h2v2z" />
    </Svg>
);

export default Bungalow;
