import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AnalyticsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3v18h18V3H3zm6 14H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z" />
    </Svg>
);

export default AnalyticsSharp;
