import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlignVerticalTopTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z" />
    </Svg>
);

export default AlignVerticalTopTwoTone;
