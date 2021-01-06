import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Series from '../pages/Series';
import Favorites from '../pages/Favorites';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:movieId" component={Movie} />
    <Route path="/series" component={Series} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Routes;
