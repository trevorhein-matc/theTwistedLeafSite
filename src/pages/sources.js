import React from "react";
import SourceCard from "../components/SourceCard/SourceCard";
import { graphql } from 'gatsby';
import NavBar from '../components/NavBar'
import GridLayout from '../components/GridLayout';
import Grid from '@material-ui/core/Grid';

const SourcePage = ({ data }) => (

    <NavBar>
        {/* <SourceCardBox>
            {data.allContentfulSourceCard.edges.map((edge, index) => (
                <SourceCard key={edge.node.id}>  
                    <SourceCard.CardImage src={edge.node.sourceImage.fluid.src} />                    

                    <a href={edge.node.sourceLink}>
                        <SourceCard.CardButton>
                            {edge.node.title}
                        </SourceCard.CardButton>
                    </a>

                    {edge.node.tags && edge.node.tags.map((tag, i) => (
                        <SourceCard.CardButton key={i}>
                            {tag}
                        </SourceCard.CardButton>
                    ))}

                </SourceCard>
            ))}    
        </SourceCardBox> */}
        <GridLayout>
            {data.allContentfulSourceCard.edges.map((edge) => (
                <Grid item xs={12} sm={6} md={6} key={edge.node.id}>
                    <SourceCard data={edge.node}>
                    </SourceCard>
                </Grid>
            ))}
        </GridLayout>
    </NavBar>
);

export default SourcePage

export const query = graphql`
    query sourcePageQuery {    
        allContentfulSourceCard(
            sort: {fields: [title], order: ASC }
        ) {
            edges {
                node {
                    id
                    title
                    tags
                    sourceLink
                    publishDate (formatString: "dddd DD MMMM YYYY")
                    sourceImage {
                    fluid {
                        src
                    }
                    }
                    description {
                    childMarkdownRemark {
                        excerpt
                    }
                    }
                }
                }
        }
    } 
`;