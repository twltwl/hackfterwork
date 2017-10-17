import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Start from './views/start/start'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Start} />
      <Route path="/article/:id" component={Start} />
    </div>
  </Router>
)
export default Routes
