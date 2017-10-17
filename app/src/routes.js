import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Start from './views/start/start'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/foo">Något annat</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Start} />
      <Route path="/foo" component={Start} />
    </div>
  </Router>
)
export default Routes
