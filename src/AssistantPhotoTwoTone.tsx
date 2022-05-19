import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AssistantPhotoTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z" opacity={0.3} />
        <Path d="M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z" />
    </Svg>
);

export default AssistantPhotoTwoTone;
