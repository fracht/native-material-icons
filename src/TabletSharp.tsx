import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TabletSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" />
    </Svg>
);

export default TabletSharp;
