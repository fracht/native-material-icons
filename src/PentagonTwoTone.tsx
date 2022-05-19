import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PentagonTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z" opacity={0.3} />
        <Path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z" />
    </Svg>
);

export default PentagonTwoTone;
