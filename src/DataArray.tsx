import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DataArray = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z" />
    </Svg>
);

export default DataArray;
