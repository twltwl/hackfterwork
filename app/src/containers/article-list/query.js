import { gql } from 'react-apollo'

const allArticles = gql`
  query allArticles {
    edges {
      node {
        data
        id
        name
      }
    }
  }
`

export { allArticles }
