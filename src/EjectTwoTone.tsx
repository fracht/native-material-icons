import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EjectTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 8.6 9.07 13h5.86z" opacity={0.3} />
        <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z" />
    </Svg>
);

export default EjectTwoTone;
