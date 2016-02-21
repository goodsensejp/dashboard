import * as React from 'react'
import { Route, Router, IndexRoute } from 'react-router'
import {App} from 'src/client/containers/App'
import {LoginPage} from 'src/client/containers/pages/LoginPage'
import {ProjectsPage} from 'src/client/containers/pages/ProjectsPage'
import {DashboardPage} from 'src/client/containers/pages/DashboardPage'
import {StoriesPage} from 'src/client/containers/pages/StoriesPage'

export function configureRoutes(history) {
  return (
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
  );
}
