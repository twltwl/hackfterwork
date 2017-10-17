import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class ArticleList extends Component {
  render() {
    return (
      <div>
        {(this.props.data.loading && 'Laddar...') || ''}
        {this.props.data &&
          this.props.data.allArticles &&
          this.props.data.allArticles.edges.map(article => (
            <div key={article.node.id}>
              <h2>{article.node.heading}</h2>
              {article.node.text}
            </div>
          ))}
      </div>
    )
  }
}

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

export default graphql(allArticles)(ArticleList)
