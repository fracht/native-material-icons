import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CurrencyFranc = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" />
    </Svg>
);

export default CurrencyFranc;
