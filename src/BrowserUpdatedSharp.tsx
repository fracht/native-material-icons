import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BrowserUpdatedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3h2zm-7 2-5-5h4V3h2v7h4l-5 5z" />
    </Svg>
);

export default BrowserUpdatedSharp;
