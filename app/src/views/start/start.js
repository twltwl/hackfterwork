import React, { Component } from 'react'
import ArticleList from '../../containers/article-list/article-list'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Artiklar</h1>
        <ArticleList />
      </div>
    )
  }
}

export default App
