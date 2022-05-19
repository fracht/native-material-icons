import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FirstPage = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
    </Svg>
);

export default FirstPage;
