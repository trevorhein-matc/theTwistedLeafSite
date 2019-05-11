import React from "react"
import NavBar from '../components/NavBar'
import { graphql } from 'gatsby';

const BitsPage = ({ data }) => (
    <NavBar>

    </NavBar>
)

export default BitsPage;

export const query = graphql`
    query bitsPageQuery {
        allContentfulStoryCard(
            sort: {fields: [updated], order: DESC }
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
`