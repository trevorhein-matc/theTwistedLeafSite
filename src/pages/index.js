import React from "react";
import NavBar from "../components/NavBar";
import { graphql } from 'gatsby';
import Jumbotron from '../components/Jumbotron';
import IndexCardBox from '../components/IndexCard';
import JumbotronItem from '../components/Jumbotron/JumbotronItem';
import { Card, Heading, Box } from 'rebass';
import IndexCard from "../components/IndexCard/IndexCard";

const IndexPage = ({ data }) => (
  <NavBar>
    <Jumbotron>
      {data.allContentfulStoryCard.edges.map(edge => (
        <JumbotronItem key={edge.node.id}>
          <Card
            color="white"
            backgroundImage={"url(" + edge.node.cardImage.fluid.src + ")"}
            backgroundSize='cover'
            bg="darkgray"
          >
            <Box
              width={[1/3, 1/4, 1/5]}
              bg="hsl(208, 13%, 15%)" 
              backgroundSize='cover'
              css={{
                zIndex: 3,
                opacity: .95,
                height: 800
              }}           
            >
              <Heading textAlign="center" fontSize={[5, 6]} py='auto' css={{ opacity: 1 }}>
                {edge.node.essentialQuestion}
              </Heading>
            </Box>
          </Card>
        </JumbotronItem>
      ))}
    </Jumbotron>
    <IndexCardBox>
      <IndexCard>
      </IndexCard>
    </IndexCardBox>
  </NavBar>
);

export default IndexPage;

export const query =graphql`
  query pageQuery {
    allContentfulStoryCard(
      # put everything in order
      sort: {fields: [updated], order: DESC }
      # filter: { pieces: { eq: null } }
      filter: {category: {eq: "Small Story"}}
      # limit the number of entries
      # limit: 1,
      # # skips the number of entries
      # skip: 1,
      
    ) {
      edges {
        node {
          id
          essentialQuestion
          category
          updated (formatString: "dddd DD MMMM YYYY")
          pieces
          cardImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;