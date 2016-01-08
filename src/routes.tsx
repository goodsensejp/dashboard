import * as React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default (
  <Route path="/" component={App}>
    <Route path="/register"
           component={RegisterPage} />
    <Route path="/login"
           component={LoginPage} />
  </Route>
)
