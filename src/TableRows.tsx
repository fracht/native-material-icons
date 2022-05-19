import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TableRows = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" />
    </Svg>
);

export default TableRows;
