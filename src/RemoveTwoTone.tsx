import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RemoveTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 13H5v-2h14v2z" />
    </Svg>
);

export default RemoveTwoTone;
