import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Airlines = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 4 2 20h17l3-16h-9zm1.5 10c-1.38 0-2.5-1.12-2.5-2.5S13.12 9 14.5 9s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
);

export default Airlines;
