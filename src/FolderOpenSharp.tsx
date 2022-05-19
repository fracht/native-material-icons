import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderOpenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" />
    </Svg>
);

export default FolderOpenSharp;
