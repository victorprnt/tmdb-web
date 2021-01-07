import React from 'react';
import { Link } from 'react-router-dom';

import * as FI from 'react-icons/fi';
import * as S from './style';

import tmdbLogo from '../../assets/images/tmdb-logo.png';

const Menu = () => (
  <S.Wrapper>
    <S.Container>
      <a href="/">
        <img src={tmdbLogo} alt="TMDB Logo" width="70px" />
      </a>
      <Link to="/movies">Movies</Link>
      <Link to="/series">Series</Link>
      <Link to="/favorites">Favorites</Link>
      <div>
        <input name="search" type="text" placeholder="Filme ou série" />
        <button type="submit">Pesquisar</button>
      </div>
    </S.Container>
  </S.Wrapper>
);

export default Menu;
