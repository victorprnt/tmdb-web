import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Favorites from '../pages/Favorites';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/series" component={Series} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Routes;
