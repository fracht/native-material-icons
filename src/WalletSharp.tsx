import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WalletSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zm-6.25 10.09L4 11.22V10h16v.53l-4.25 3.56zM4 6h16v2H4V6z" />
    </Svg>
);

export default WalletSharp;
