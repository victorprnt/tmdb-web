import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Series from '../pages/Series';
import Favorites from '../pages/Favorites';
import Search from '../components/Search';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:movieId" exact component={Movie} />
    <Route path="/series" component={Series} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
