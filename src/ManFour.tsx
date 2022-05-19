import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManFour = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManFour;
