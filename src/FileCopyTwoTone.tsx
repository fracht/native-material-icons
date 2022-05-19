import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileCopyTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 7H8v14h11v-9h-5z" opacity={0.3} />
        <Path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
    </Svg>
);

export default FileCopyTwoTone;
