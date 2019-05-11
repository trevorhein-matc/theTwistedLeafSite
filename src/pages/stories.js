import React from "react";
import { graphql } from 'gatsby';
import NavBar from '../components/NavBar';
import GridLayout from '../components/GridLayout';
import StoryCard from '../components/StoryCard';
import Grid from '@material-ui/core/Grid';

const MainStoriesPage = ({ data }) => (
    <NavBar>
        <GridLayout>
                {data.allContentfulStoryCard.edges.map(edge => (
                    <Grid item xs={12} sm={6} md={6} key={edge.node.id}>
                        <StoryCard data={edge.node}>
                        </StoryCard>
                    </Grid>
                ))}
        </GridLayout>
    </NavBar>
)

export default MainStoriesPage;

export const query = graphql`
    query MainStoriesPageQuery {
        allContentfulStoryCard(
            sort: {fields: [updated], order: DESC }
        ) {
            edges {
                node {
                    id
                    essentialQuestion
                    category
                    updated (formatString: "DD MMMM YYYY")
                    pieces
                    topics
                    locations
                    pieceReference {
                        id
                        pieceTitle
                        category
                        updated (formatString: "DD MMMM YYYY")
                        topics
                        locations
                        bitConnects
                        cardImage {
                            id
                            fluid {
                                src
                            }
                        }
                    }
                    cardImage {
                        id
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`