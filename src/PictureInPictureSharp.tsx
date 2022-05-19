import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PictureInPictureSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z" />
    </Svg>
);

export default PictureInPictureSharp;
