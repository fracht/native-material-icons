import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PublishTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity={0.3} />
        <Path d="M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z" />
    </Svg>
);

export default PublishTwoTone;
