import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TerminalTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M4 18h16V8H4v10zm8-3h6v2h-6v-2zm-5.91-4.59L7.5 9l4 4-4 4-1.41-1.41L8.67 13l-2.58-2.59z"
            opacity={0.3}
        />
        <Path d="M12 15h6v2h-6z" />
        <Path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8h16v10z" />
        <Path d="m7.5 17 4-4-4-4-1.41 1.41L8.67 13l-2.58 2.59z" />
    </Svg>
);

export default TerminalTwoTone;
