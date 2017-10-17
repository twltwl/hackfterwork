import { gql } from 'react-apollo'

const allArticles = gql`
query allArticlesQuery {
  allArticles {
    edges {
      node {
        id
        name
        text
        heading
        authorByAuthorId {
          id
          name
        }
      }
    }
  }
}}
`

export default { apa: allArticles }
