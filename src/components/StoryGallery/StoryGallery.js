// import React from "react"
// import Layout from "../components/Layout"
// import { graphql } from 'gatsby';

// const PiecesPage = ({ data }) => (
//     <Layout>

//     </Layout>
// )

// export default PiecesPage;

// export const query = graphql`
//     query StoryGalleryPageQuery {
//         allContentfulStoryCard(
//             sort: {fields: [updated], order: DESC }
//         ) {
//             edges {
//                 node {
//                     id
//                     essentialQuestion
//                     category
//                     updated (formatString: "dddd DD MMMM YYYY")
//                     pieces
//                     cardImage {
//                         fluid {
//                             src
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `