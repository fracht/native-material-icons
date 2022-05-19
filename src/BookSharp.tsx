import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    </Svg>
);

export default BookSharp;
