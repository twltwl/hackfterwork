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
              <img alt="" src={article.node.image} />
              <h2>{article.node.heading}</h2>
              <p>{article.node.preamble}</p>
              <p>{article.node.text}</p>
              <p>{article.node.createdAt}</p>
              <p>{article.node.authorByAuthorId.name}</p>
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
          preamble
          heading
          text
          createdAt
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
