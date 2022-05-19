import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderCopyTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11.17 4H7v11h14V6h-7.83z" opacity={0.3} />
        <Path d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 11H7V4h4.17l2 2H21v9z" />
        <Path d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z" />
    </Svg>
);

export default FolderCopyTwoTone;
