import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CropSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z" />
    </Svg>
);

export default CropSharp;
