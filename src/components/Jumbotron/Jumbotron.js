import React from 'react'
import { Flex } from 'rebass'

const Jumbotron = ({ children }) => (
    <Flex
        width={[1, 1, 1]}
        mx='auto'
        flexWrap='wrap' 
    >
        { children }
    </Flex>
);

export default Jumbotron