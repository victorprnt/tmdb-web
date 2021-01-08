import React, { useEffect, useState } from 'react';

import * as FI from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import * as S from './style';

import Menu from '../../components/Menu';
import { getMovieDetail, getMovieSocial } from '../../services/movie-services';

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

interface Crew {
  id: number;
  name: string;
  profile_path: string;
  job: string;
}

interface Social {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

const Movie = () => {
  const { params } = useRouteMatch<MovieParams>();
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const [movieSocial, setMovieSocial] = useState<Social>();

  async function handleMovieDetail(movieId: string) {
    const { data } = await getMovieDetail(movieId);
    setMovieDetail(data);
  }

  async function handleMovieSocial(movieId: string) {
    const { data } = await getMovieSocial(movieId);
    setMovieSocial(data);
  }

  // async function handleMovieGenre(movieId: string) {
  //   const { data } = await getMovieGenre(movieId);
  //   console.log(data.genres);
  // }

  useEffect(() => {
    handleMovieDetail(params.movieId);
    handleMovieSocial(params.movieId);
  }, [setMovieDetail, setMovieSocial]);

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
                  <p>John Smith</p>
                </li>
                <li>
                  <strong>Elenco</strong>
                  <p>Fulano, Beltrano, Sicrano</p>
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
