import * as React from 'react'
import { Route, Router, IndexRoute } from 'react-router'
import App from './containers/App'
import LoginPage from './containers/pages/LoginPage'
import ProjectsPage from './containers/pages/ProjectsPage'
import DashboardPage from './containers/pages/DashboardPage'
import StoriesPage from './containers/pages/StoriesPage'

export default (history) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute
        component={DashboardPage} />
      <Route path="/login"
        component={LoginPage} />
      <Route path="/projects"
        component={ProjectsPage} />
      <Route path="/stories"
        component={StoriesPage} />
    </Route>
  </Router>
)
