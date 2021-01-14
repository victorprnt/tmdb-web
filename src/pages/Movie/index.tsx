import React, { useEffect, useState } from 'react';

import * as FI from 'react-icons/fi';
import * as BS from 'react-icons/bs';

import { useRouteMatch } from 'react-router-dom';
import * as S from './style';

import Header from '../../components/Header';
import {
  getMovieDetail,
  getMovieSocial,
  getMovieCastAndCrew,
} from '../../services/movie-services';
import { getLaunchYear } from '../../utils';

interface MovieParams {
  movieId: string;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  tagline: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Crew {
  id: number;
  credit_id: string;
  name: string;
  job: string;
  profile_path: string;
}

interface Social {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

const Movie = () => {
  const { params } = useRouteMatch<MovieParams>();
  const [isFavorite, setFavorite] = useState(false);
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const [movieSocial, setMovieSocial] = useState<Social>();
  const [movieCast, setMovieCast] = useState<Cast[]>([]);
  const [movieCrew, setMovieCrew] = useState<Crew[]>([]);
  const [movieFavorites, setMovieFavorites] = useState<Movie[]>(() => {
    const storagedFavorites = localStorage.getItem('@TMDB:favorites');
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }
    return [];
  });

  async function handleMovieDetail(movieId: string) {
    const { data } = await getMovieDetail(movieId);
    setMovieDetail(data);
  }

  async function handleMovieSocial(movieId: string) {
    const { data } = await getMovieSocial(movieId);
    setMovieSocial(data);
  }

  async function handleMovieCast(movieId: string) {
    const { data } = await getMovieCastAndCrew(movieId);
    setMovieCast(data.cast);
  }

  async function handleMovieCrew(movieId: string) {
    const { data } = await getMovieCastAndCrew(movieId);
    setMovieCrew(data.crew);
  }

  function storeFavorite() {
    if (movieDetail) {
      console.log(movieDetail);
      console.log(movieFavorites);
      console.log(movieFavorites.includes(movieDetail));
      localStorage.setItem(
        '@TMDB:favorites',
        JSON.stringify([...movieFavorites, movieDetail]),
      );
      setFavorite(true);
    }
  }

  useEffect(() => {
    handleMovieDetail(params.movieId);
    handleMovieSocial(params.movieId);
    handleMovieCast(params.movieId);
    handleMovieCrew(params.movieId);
  }, [setMovieDetail, setMovieSocial, setMovieCast, setMovieCrew, params]);

  return (
    <>
      <Header />
      {movieDetail && (
        <S.Details>
          <img
            src={`${process.env.REACT_APP_TMDB_POSTER}${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
          <section>
            <header>
              <strong>{movieDetail.title}</strong>
              <button type="button" onClick={storeFavorite}>
                {isFavorite ? (
                  <BS.BsStarFill size={22} />
                ) : (
                  <BS.BsStar size={22} />
                )}
              </button>
              <p>{movieDetail.original_title}</p>
            </header>

            <div>
              <span>{getLaunchYear(movieDetail.release_date)}</span>
              <span>{movieDetail.runtime} min</span>
              <p id="tagline">{movieDetail.tagline}</p>
              <p id="sinopse">{movieDetail.overview}</p>
            </div>

            <footer>
              {movieDetail.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
              <ul>
                <li>
                  <strong>Direção</strong>
                  {movieCrew &&
                    movieCrew.map(crew => {
                      return (
                        <p key={crew.credit_id}>
                          {crew.job === 'Director' && crew.name}
                        </p>
                      );
                    })}
                </li>
                <li>
                  <strong>Elenco</strong>
                  {movieCast &&
                    movieCast.slice(0, 3).map(cast => {
                      return <p key={cast.id}>{cast.name}</p>;
                    })}
                </li>
              </ul>
              {movieSocial && (
                <div>
                  {movieSocial.instagram_id && (
                    <a
                      href={`https://instagram.com/${movieSocial.instagram_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FI.FiInstagram size={20} />
                    </a>
                  )}

                  {movieSocial.facebook_id && (
                    <a
                      href={`https://facebook.com/${movieSocial.facebook_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FI.FiFacebook size={20} />
                    </a>
                  )}

                  {movieSocial.twitter_id && (
                    <a
                      href={`https://twitter.com/${movieSocial.twitter_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FI.FiTwitter size={20} />
                    </a>
                  )}
                </div>
              )}
            </footer>
          </section>
        </S.Details>
      )}
    </>
  );
};

export default Movie;
