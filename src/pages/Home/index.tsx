import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

import Menu from '../../components/Menu';
import { getTrendingMovies } from '../../services/movie-services';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

// const tmdbKey = 'api_key=34d6e856a918914f65527a936f73f3f2';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    handleTrendingMovies();
  }, [setMovies]);

  async function handleTrendingMovies() {
    const { data } = await getTrendingMovies();
    setMovies(data.results);
  }

  return (
    <>
      <Menu />
      <S.Container>
        {movies &&
          movies.map(movie => (
            <div>
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <div>
                  <img
                    src="https://ecdn.teacherspayteachers.com/thumbitem/Percentage-Rings-Black-Filled-Infographic-Elements-Clip-Art-Set-Commercial-Use-2905409-1524270454/original-2905409-2.jpg"
                    alt=""
                  />
                </div>

                <img
                  src={`${process.env.REACT_APP_TMDB_CARD}${movie.poster_path}`}
                  alt=""
                />
              </Link>
              <strong>{movie.title}</strong>
            </div>
          ))}
      </S.Container>
    </>
  );
};

export default Home;
