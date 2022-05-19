import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NoteSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z" />
    </Svg>
);

export default NoteSharp;
