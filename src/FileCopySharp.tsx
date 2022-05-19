import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileCopySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 1H2v16h2V3h12V1zm-1 4 6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
    </Svg>
);

export default FileCopySharp;
