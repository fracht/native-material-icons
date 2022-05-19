import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewColumnSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" />
    </Svg>
);

export default ViewColumnSharp;
