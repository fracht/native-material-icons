import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FilterFiveSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2h6z" />
    </Svg>
);

export default FilterFiveSharp;
