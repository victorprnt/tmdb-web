import React, { useEffect, useState } from 'react';

import * as FI from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import * as S from './style';

import Menu from '../../components/Menu';
import { getDetailMovie, getSocialMovie } from '../../services/movie-services';

interface MovieParams {
  movieId: string;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: string[];
}

const Movie = () => {
  const { params } = useRouteMatch<MovieParams>();
  const [movieDetail, setMovieDetail] = useState<Movie>();

  async function handleMovieDetail(movieId: string) {
    const { data } = await getDetailMovie(movieId);
    setMovieDetail(data);
  }

  useEffect(() => {
    handleMovieDetail(params.movieId);
  }, [setMovieDetail]);

  return (
    <>
      <Menu />
      {movieDetail && (
        <S.Details>
          <img
            src={`${process.env.REACT_APP_TMDB_POSTER}${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
          <section>
            <header>
              <strong>{movieDetail.title}</strong>
              <FI.FiStar size={20} />
              <p>{movieDetail.original_title}</p>
            </header>

            <div>
              <span>{movieDetail.release_date}</span>
              <span>{movieDetail.runtime}</span>
              <strong>Sinopse</strong>
              <p>{movieDetail.overview}</p>
            </div>

            <footer>
              <span>genre</span>
              <ul>
                <li>
                  <strong>Direção</strong>
                  <p>John Smith</p>
                </li>
                <li>
                  <strong>Elenco</strong>
                  <p>Fulano, Beltrano, Sicrano</p>
                </li>
              </ul>

              <div>
                <a href="https://instagram.com">
                  <FI.FiInstagram size={20} />
                </a>

                <a href="https://facebook.com">
                  <FI.FiFacebook size={20} />
                </a>

                <a href="https://twitter.com">
                  <FI.FiTwitter size={20} />
                </a>
              </div>
            </footer>
          </section>
        </S.Details>
      )}
    </>
  );
};

export default Movie;
