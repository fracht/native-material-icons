import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PropaneSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82.9 15.21 3.62 18 7 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z" />
    </Svg>
);

export default PropaneSharp;
