import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Simple, Zoom, Arrow, Final } from './graphs';
import Button from './Button';
import Root from './Root';

/* Remove this SVG Demo after preso */
import { Circle, WorkingCircle, WhiteSheep,
  WhiteSheepWithBlurFilter, WhiteSheepWithTornFilter,
  DraggableCircle } from '../graphs/SVGDemo';
/* Remove this SVG Demo after preso */

const App = ()  => (
  <Router history={browserHistory}>
    <Route path={`${BASE_HREF}`} component={Root}>
      <Route path="button" component={Button} />
      <Route path="graph">
        <IndexRoute component={Zoom} />
        <Route path="simple" component={Simple} />
        <Route path="zoom" component={Zoom} />
        <Route path="arrow" component={Arrow} />
      </Route>
      <Route path="final" component={Final} />
/* Remove this SVG Demo after preso */
      <Route path="demo-1" component={Circle} />
      <Route path="demo-2" component={WorkingCircle} />
      <Route path="demo-3" component={WhiteSheep} />
      <Route path="demo-4" component={WhiteSheepWithBlurFilter} />
      <Route path="demo-5" component={WhiteSheepWithTornFilter} />
      <Route path="demo-6" component={DraggableCircle} />
/* Remove this SVG Demo after preso */
    </Route>
  </Router>
);

export default App;

