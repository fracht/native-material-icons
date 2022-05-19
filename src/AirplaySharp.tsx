import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AirplaySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z" />
    </Svg>
);

export default AirplaySharp;
