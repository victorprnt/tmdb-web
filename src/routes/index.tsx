import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Movie from '../pages/Movie';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie" component={Movie} />
  </Switch>
);

export default Routes;
