import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const FormatListBulletedTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 5h14v2H7z" />
        <Circle cx={4} cy={6} r={1.5} />
        <Path d="M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z" />
        <Circle cx={4} cy={12} r={1.5} />
    </Svg>
);

export default FormatListBulletedTwoTone;
