import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const CategorySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 2-5.5 9h11z" />
        <Circle cx={17.5} cy={17.5} r={4.5} />
        <Path d="M3 13.5h8v8H3z" />
    </Svg>
);

export default CategorySharp;
