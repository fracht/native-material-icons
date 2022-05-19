import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AddCommentSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
    </Svg>
);

export default AddCommentSharp;
