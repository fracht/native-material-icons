import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FilterFramesSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4h-6l-4-4-4 4H2v18h20V4zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12" />
    </Svg>
);

export default FilterFramesSharp;
