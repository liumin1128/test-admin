import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from './routes/Users';
import NotFound from './components/Error/NotFound';

import Layout from './routes/Layout';

import Login from './routes/Login.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}>
        <Route path="/users" component={Users} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default RouterConfig;
