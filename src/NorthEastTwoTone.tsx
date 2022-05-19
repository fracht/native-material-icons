import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NorthEastTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
    </Svg>
);

export default NorthEastTwoTone;
