import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as FI from 'react-icons/fi';
import dbnc from 'lodash';
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

  const delayQuery = useCallback(
    dbnc.debounce((q: string) => {
      q.length > 2 && handleSearchMovie(q);
      q.length <= 2 && setMovies([]);
    }, 400),
    [],
  );

  async function handleSearchMovie(q: string) {
    // event: FormEvent<HTMLFormElement>,
    // event.preventDefault();
    const { data } = await getSearchResult(q);

    setMovies(data.results);
  }

  function cleanQuery() {
    setMovies([]);
    setQuery('');
  }

  // useEffect(() => {
  //   query.length <= 1 && setMovies(null);
  //   // query.length > 1 && handleSearchMovie();
  //   console.log(`>>>${query}`);
  // }, [query, setMovies]);

  return (
    <S.Wrapper>
      <S.LinksContainer>
        <a href="/">
          <img src={tmdbLogo} alt="TMDB Logo" width="70px" />
        </a>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/favorites">Favorites</Link>
      </S.LinksContainer>

      <S.FormContainer>
        <form>
          <input
            value={query}
            type="text"
            placeholder="Filme ou série"
            onChange={e => {
              setQuery(e.target.value);
              delayQuery(e.target.value);
            }}
          />
          <S.SearchMenu>
            {movies &&
              movies.map(movie => {
                return (
                  <Link
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    onClick={cleanQuery}
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `${process.env.REACT_APP_TMDB_THUMB}${movie.poster_path}`
                          : 'https://simpleicon.com/wp-content/uploads/film.png'
                      }
                      width="45px"
                      alt={movie.title}
                    />
                    <span>{movie.title}</span>
                  </Link>
                );
              })}
          </S.SearchMenu>
          <button type="submit">Pesquisar</button>
        </form>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Menu;
