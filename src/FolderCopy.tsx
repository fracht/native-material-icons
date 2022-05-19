import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderCopy = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z" />
        <Path d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default FolderCopy;
