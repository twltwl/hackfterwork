import { graphql, gql } from 'react-apollo'

const ALL_ARTICLES = gql`
  query {
    name
    text
  }
`
