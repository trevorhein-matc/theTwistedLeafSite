import React from 'react'
import { Flex } from 'rebass'

const GalleryBox = ({ children }) => (
    <Flex
        my={4}
        mx='auto'
        width={4/5}
        flexWrap='wrap'
    >
        { children }
    </Flex>
);

export default GalleryBox