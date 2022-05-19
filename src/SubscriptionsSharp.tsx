import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SubscriptionsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6-6-3.27v6.53L16 16z" />
    </Svg>
);

export default SubscriptionsSharp;
