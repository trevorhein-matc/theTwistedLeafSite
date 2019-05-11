import React from 'react'
import styled from 'styled-components'
import { Box, Card, Text, Image as ImageBase } from 'rebass'
import { default as Heading } from '../Heading/JumbotronHeading'

const Image = props => (
    <ImageBase
        src={props.src}
        my="auto"
        width={1}
        {...props}
    />
)

const JumboImg = props => (
    <Card      
        backgroundImage={props.src}
        backgroundSize='cover'
        my="auto"
        width={1}
        {...props}
    >
    </Card>
)

const BaseText = props => (
    <Text mb={4} {...props}>
        {props.children}
    </Text>
)

const StyledText = styled(BaseText)`
    color: ${({ theme }) => theme.color.text.primary};
`

const PrimaryText = props => <StyledText {...props} />

const JumbotronItem = ({ children }) => (
    <Box
        width={[1, 1, 1]}
        mx='auto'
    >
        { children }
    </Box>
)

JumbotronItem.Heading = Heading
JumbotronItem.Image = Image
JumbotronItem.Text = PrimaryText
JumbotronItem.JumboImg = JumboImg

export default JumbotronItem