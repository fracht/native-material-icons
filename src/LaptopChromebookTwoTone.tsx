import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LaptopChromebookTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 5h16v10H4z" opacity={0.3} />
        <Path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
    </Svg>
);

export default LaptopChromebookTwoTone;
