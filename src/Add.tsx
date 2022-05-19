import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Add = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
);

export default Add;
