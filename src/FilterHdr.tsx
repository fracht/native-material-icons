import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FilterHdr = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m14 6-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    </Svg>
);

export default FilterHdr;
