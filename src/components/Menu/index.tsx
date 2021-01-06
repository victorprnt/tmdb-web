import React from 'react';

import * as FI from 'react-icons/fi';
import * as S from './style';

import tmdbLogo from '../../assets/images/tmdb-logo.png';

const Menu = () => (
  <S.NavBar>
    <a href="/">
      <img src={tmdbLogo} alt="TMDB Logo" width="70px" />
    </a>
    <S.Links>
      <S.LinkMovies to="/movies">Movies</S.LinkMovies>
      <S.LinkSeries to="/series">Series</S.LinkSeries>
      <S.LinkFavorites to="/favorites">Favorites</S.LinkFavorites>
      {/* <FI.FiSearch size={20} color="white" /> */}
      <input name="search" />
    </S.Links>
  </S.NavBar>
);

export default Menu;
