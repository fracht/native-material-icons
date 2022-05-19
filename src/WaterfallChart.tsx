import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WaterfallChart = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z" />
    </Svg>
);

export default WaterfallChart;
