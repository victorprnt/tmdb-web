import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as FI from 'react-icons/fi';
import * as S from './style';

import tmdbLogo from '../../assets/images/tmdb-logo.png';
import { getSearchResult } from '../../services/movie-services';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const Menu = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[] | null>(null);

  async function handleSearchMovie() {
    // event: FormEvent<HTMLFormElement>,
    // event.preventDefault();
    const { data } = await getSearchResult(query);

    setMovies(data.results);
  }

  useEffect(() => {
    query.length > 1 && handleSearchMovie();
    query.length === 0 && setMovies(null);
    console.log(query);
    console.log(movies);
  }, [query, setMovies]);

  return (
    <S.Wrapper>
      <S.Container>
        <a href="/">
          <img src={tmdbLogo} alt="TMDB Logo" width="70px" />
        </a>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/favorites">Favorites</Link>
        <form>
          <input
            value={query}
            type="text"
            placeholder="Filme ou série"
            onChange={e => {
              setQuery(e.target.value);
              // query.length > 1 && handleSearchMovie();
            }}
          />
          {movies &&
            movies.map(movie => {
              return (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <img src="" alt="" />
                  <span>{movie.title}</span>
                </Link>
              );
            })}
          <button type="submit">Pesquisar</button>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};

export default Menu;
