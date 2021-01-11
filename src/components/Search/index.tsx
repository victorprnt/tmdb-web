import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import { getSearchResult } from '../../services/movie-services';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const Search = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  async function handleSearchMovie(query: string) {
    // event: FormEvent<HTMLFormElement>,
    // event.preventDefault();
    const { data } = await getSearchResult(query);

    setMovies(data.results);
  }

  // const movies = [
  //   {
  //     id: 1,
  //     title: 'movie-1',
  //     poster_path: 'URL-movie-1',
  //     vote_average: 10,
  //   },
  //   {
  //     id: 2,
  //     title: 'movie-2',
  //     poster_path: 'URL-movie-2',
  //     vote_average: 10,
  //   },
  //   {
  //     id: 3,
  //     title: 'movie-3',
  //     poster_path: 'URL-movie-3',
  //     vote_average: 10,
  //   },
  //   {
  //     id: 4,
  //     title: 'movie-4',
  //     poster_path: 'URL-movie-4',
  //     vote_average: 10,
  //   },
  //   {
  //     id: 5,
  //     title: 'movie-5',
  //     poster_path: 'URL-movie-5',
  //     vote_average: 10,
  //   },
  // ];
  return (
    <S.Wrapper>
      {movies &&
        movies.map(movie => {
          return (
            <Link key="{movie.id}" to="/movie/movie.id">
              <img src="" alt="" />
              <span>movie.title</span>
            </Link>
          );
        })}
    </S.Wrapper>
  );
};

export default Search;
