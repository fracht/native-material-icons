import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const FlashlightOnOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z" />
        <Circle cx={12} cy={14} r={1.5} />
    </Svg>
);

export default FlashlightOnOutlined;
