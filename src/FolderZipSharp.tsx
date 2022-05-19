import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderZipSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 6-2-2H2v16h20V6H12zm6 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2v2z" />
    </Svg>
);

export default FolderZipSharp;
