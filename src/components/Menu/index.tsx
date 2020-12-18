import React from 'react';

import * as S from './style';

import tmdbLogo from '../../assets/images/tmdb-logo.png';

const Movie = () => (
  <S.NavBar>
    <a href="/">
      <img src={tmdbLogo} alt="TMDB Logo" width="70px" />
    </a>
    <S.Links>
      <S.LinkMovies to="/movies">Movies</S.LinkMovies>
      <S.LinkSeries to="/series">Series</S.LinkSeries>
      <S.LinkFavorites to="/favorites">Favorites</S.LinkFavorites>
      <input name="search" />
    </S.Links>
  </S.NavBar>
);

export default Movie;
