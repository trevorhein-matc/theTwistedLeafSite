import React from 'react'
import HeadingBase from '../HeadingBase'

const Heading2 = props => (
    <HeadingBase 
        as="h2" 
        fontSize={[1, 2, 3]} 
        {...props} 
    />
)

export default Heading2