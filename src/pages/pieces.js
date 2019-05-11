import React from "react"
import NavBar from '../components/NavBar'
import PieceCard from '../components/PieceCard/PieceCard'
import GridLayout from '../components/GridLayout';
import Grid from '@material-ui/core/Grid';
import { graphql } from 'gatsby';

const PiecesPage = ({ data }) => (
    <NavBar>
        <GridLayout>
            {data.allContentfulPieceCard.edges.map((edge) => (
                <Grid item xs={12} sm={6} lg={3} key={edge.node.id}>
                    <PieceCard data={edge.node}>
                    </PieceCard>
                </Grid>
            ))}
        </GridLayout>
    </NavBar>
)

export default PiecesPage;

export const query = graphql`
query piecesPageQuery {
	allContentfulPieceCard (
    sort: {fields: [updated], order: DESC }
  ) {
    edges {
      node {
		    id
        pieceTitle
        category
		    topics
        locations
        bitConnects
        storyConnects
        updated (formatString: "DD MMMM YYYY")
        cardImage {
          fluid {
            src
          }
        }
        summary {
          content {
		        content {
              value
            }
          }
        }
      }
    }
  }
}
`