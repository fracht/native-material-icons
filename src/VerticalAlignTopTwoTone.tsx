import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalAlignTopTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z" />
    </Svg>
);

export default VerticalAlignTopTwoTone;
