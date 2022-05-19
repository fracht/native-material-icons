import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CommentBankSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 2v20l4-4h16V2H2zm17 11-2.5-1.5L14 13V5h5v8z" />
    </Svg>
);

export default CommentBankSharp;
