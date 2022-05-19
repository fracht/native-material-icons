import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewSidebarSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z" />
    </Svg>
);

export default ViewSidebarSharp;
