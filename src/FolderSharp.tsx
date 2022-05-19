import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 4H2v16h20V6H12l-2-2z" />
    </Svg>
);

export default FolderSharp;
