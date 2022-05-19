import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookmarksSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" />
    </Svg>
);

export default BookmarksSharp;
