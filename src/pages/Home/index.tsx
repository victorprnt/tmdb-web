import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

import Header from '../../components/Header';
import { getTrendingMovies } from '../../services/movie-services';
import Card from '../../components/Card';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

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
      <Header />
      <S.Movies>
        {movies &&
          movies.map(movie => (
            <Card
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              key={movie.id}
            />
            // <div key={movie.id}>
            //   <Link to={`/movie/${movie.id}`}>
            //     {/* <div>
            //       <img
            //         src="https://ecdn.teacherspayteachers.com/thumbitem/Percentage-Rings-Black-Filled-Infographic-Elements-Clip-Art-Set-Commercial-Use-2905409-1524270454/original-2905409-2.jpg"
            //         alt=""
            //       />
            //     </div> */}

            //     <img
            //       src={`${process.env.REACT_APP_TMDB_CARD}${movie.poster_path}`}
            //       alt=""
            //     />
            //   </Link>
            //   <strong>{movie.title}</strong>
            // </div>
          ))}
      </S.Movies>
    </>
  );
};

export default Home;
