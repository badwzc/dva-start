import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import MainLayout from './components/MainLayout';

import IndexPage from './routes/IndexPage';
import OperationLog from './routes/OperationLog';

export default function({ history }) {
  return (
    <Router history={history} component={MainLayout}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={IndexPage} />
        <Route path="/Operation_log" component={OperationLog} />
      </Route>
    </Router>
  );
};
