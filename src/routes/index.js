import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Graph from './Graph';
import Button from './Button';
import Root from './Root';

const App = ()  => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Button} />
      <Route path="/button" component={Button} />
      <Route path="/graph" component={Graph} />
    </Route>
  </Router>
);

export default App;

