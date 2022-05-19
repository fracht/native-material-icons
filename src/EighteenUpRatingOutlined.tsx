import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EighteenUpRatingOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8.5 15H10V9H7v1.5h1.5z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <Path d="M12.5 15H15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1.5v1.5H13V10zm0 2.5h1.5V14H13v-1.5z" />
    </Svg>
);

export default EighteenUpRatingOutlined;
