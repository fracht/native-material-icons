import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlagSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
    </Svg>
);

export default FlagSharp;
