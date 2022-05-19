import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewWeekSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7.33 20H2V4h5.33v16zM22 20V4h-5.33v16H22zm-7.33 0V4H9.33v16h5.34z" />
    </Svg>
);

export default ViewWeekSharp;
