import React from "react";
import { Flex } from "rebass";

const SourceCardBox = ({ children }) => (
    <Flex my={4} mx="auto" width={9 / 10}  flexWrap='wrap'>
        { children }
    </Flex>
);

export default SourceCardBox;