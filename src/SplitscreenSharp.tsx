import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SplitscreenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 4v5H6V4h12m2-2H4v9h16V2zm-2 13v5H6v-5h12m2-2H4v9h16v-9z" />
    </Svg>
);

export default SplitscreenSharp;
