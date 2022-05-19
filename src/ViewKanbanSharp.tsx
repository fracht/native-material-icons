import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewKanbanSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zM9 17H7V7h2v10zm4-5h-2V7h2v5zm4 3h-2V7h2v8z" />
    </Svg>
);

export default ViewKanbanSharp;
