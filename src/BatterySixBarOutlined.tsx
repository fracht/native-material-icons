import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BatterySixBarOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v2h6V6z" />
    </Svg>
);

export default BatterySixBarOutlined;
