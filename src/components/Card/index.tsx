import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Card = (movie: Movie) => (
  <S.Wrapper>
    <div key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${process.env.REACT_APP_TMDB_CARD}${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <strong>{movie.title}</strong>
    </div>
  </S.Wrapper>
);

export default Card;
