import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TourTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 12V6h11.05l-1.2 3 1.2 3z" opacity={0.3} />
        <Path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    </Svg>
);

export default TourTwoTone;
