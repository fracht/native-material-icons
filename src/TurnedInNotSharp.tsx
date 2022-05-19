import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnedInNotSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 3H5.01L5 21l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z" />
    </Svg>
);

export default TurnedInNotSharp;
