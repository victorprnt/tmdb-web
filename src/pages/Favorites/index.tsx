import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { getMovieDetail } from '../../services/movie-services';

import * as S from './style';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storagedFavorites = localStorage.getItem('@TMDB:favorites');
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }
    return [];
  });

  return (
    <>
      <Header />
      <S.Wrapper>
        {favorites &&
          favorites.map(favorite => (
            <Card
              id={favorite.id}
              poster_path={favorite.poster_path}
              title={favorite.title}
              key={favorite.id}
            />
          ))}
      </S.Wrapper>
    </>
  );
};

export default Favorites;
