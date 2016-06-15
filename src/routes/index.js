import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Simple } from './graphs';
import Button from './Button';
import Root from './Root';

const App = ()  => (
  <Router history={browserHistory}>
    <Route path={`${BASE_HREF}`} component={Root}>
      <Route path="button" component={Button} />
      <Route path="graph">
        <IndexRoute component={Simple} />
        <Route path="simple" component={Simple} />
      </Route>
    </Route>
  </Router>
);

export default App;

