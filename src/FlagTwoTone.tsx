import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlagTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity={0.3} />
        <Path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z" />
    </Svg>
);

export default FlagTwoTone;
