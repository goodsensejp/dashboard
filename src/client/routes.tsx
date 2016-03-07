import * as React from 'react'
import { Route, Router, IndexRoute } from 'react-router'
import {ConnectedApp} from 'src/client/containers/App'
import {ConnectedLoginPage} from 'src/client/containers/pages/LoginPage'
import {ConnectedProjectsPage} from 'src/client/containers/pages/ProjectsPage'
import {ConnectedDashboardPage} from 'src/client/containers/pages/DashboardPage'
import {ConnectedEditStoryPage} from 'src/client/containers/pages/Stories/EditStoryPage'
import {ConnectedShowStoryPage} from 'src/client/containers/pages/Stories/ShowStoryPage'
import {ConnectedListStoriesPage} from 'src/client/containers/pages/Stories/ListStoriesPage'

export function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={ConnectedApp}>
        <IndexRoute
          component={ConnectedDashboardPage} />
        <Route path="/login"
          component={ConnectedLoginPage} />
        <Route path="/projects"
          component={ConnectedProjectsPage} />
        <Route path="/stories/create"
          component={ConnectedEditStoryPage} />
        <Route path="/stories/update/:id"
          component={ConnectedEditStoryPage} />
        <Route path="/stories/show/:id"
          component={ConnectedShowStoryPage} />
        <Route path="/stories"
          component={ConnectedListStoriesPage} />
      </Route>
    </Router>
  );
}
