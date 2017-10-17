import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { allArticles } from './query'

class ArticleList extends Component {
  render() {
    console.log(this.props)
    return <div>hej</div>
  }
}

export default graphql(allArticles, { name: 'allArticles' })(ArticleList)
