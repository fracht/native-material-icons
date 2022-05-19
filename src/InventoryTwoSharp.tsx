import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InventoryTwoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 2v6.7h1V22h18V8.7h1V2H2zm13 12H9v-2h6v2zm5-7H4V4h16v3z" />
    </Svg>
);

export default InventoryTwoSharp;
