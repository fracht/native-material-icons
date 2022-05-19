import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DeleteTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 9h8v10H8z" opacity={0.3} />
        <Path d="m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
    </Svg>
);

export default DeleteTwoTone;
