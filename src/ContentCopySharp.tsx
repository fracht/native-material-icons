import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ContentCopySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z" />
    </Svg>
);

export default ContentCopySharp;
