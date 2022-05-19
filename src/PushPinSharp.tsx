import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PushPinSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            fillRule="evenodd"
            d="M16 9V4h2V2H6v2h2v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
        />
    </Svg>
);

export default PushPinSharp;
