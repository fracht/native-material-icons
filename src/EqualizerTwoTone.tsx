import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EqualizerTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
    </Svg>
);

export default EqualizerTwoTone;
