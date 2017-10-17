import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ArticleList extends Component {
  render() {
    console.log(this.props.allArticlesQuery.allArticles)
    return (
      <div>
        {(this.props.allArticlesQuery.loading && 'Laddar...') || ''}
        {this.props.allArticlesQuery &&
          this.props.allArticlesQuery.allArticles &&
          this.props.allArticlesQuery.allArticles.edges.map(article => (
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
          heading
          authorByAuthorId {
            id
            name
          }
        }
      }
    }
  }
`

export default graphql(allArticles, { name: 'allArticlesQuery' })(ArticleList)
