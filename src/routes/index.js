import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Simple, Zoom, Arrow, Final } from './graphs';
import Button from './Button';
import Root from './Root';

const App = ()  => (
  <Router history={browserHistory}>
    <Route path={`${BASE_HREF}`} component={Root}>
      <Route path="button" component={Button} />
      <Route path="graph">
        <IndexRoute component={Final} />
        <Route path="simple" component={Simple} />
        <Route path="zoom" component={Zoom} />
        <Route path="arrow" component={Arrow} />
        <Route path="final" component={Final} />
      </Route>
    </Route>
  </Router>
);

export default App;

