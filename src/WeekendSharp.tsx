import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WeekendSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z" />
    </Svg>
);

export default WeekendSharp;
