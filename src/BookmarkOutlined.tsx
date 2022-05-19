import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookmarkOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default BookmarkOutlined;
