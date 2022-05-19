import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewAgendaSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 13h18v8H3zM3 3h18v8H3z" />
    </Svg>
);

export default ViewAgendaSharp;
