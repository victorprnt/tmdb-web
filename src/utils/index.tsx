import React, { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

// const [movieFavorites, setMovieFavorites] = useState<Movie[]>(() => {
//   const storagedFavorites = localStorage.getItem('@TMDB:favorites');
//   if (storagedFavorites) {
//     return JSON.parse(storagedFavorites);
//   }
//   return [];
// });

export const getLaunchYear = (date: string) => {
  return date.slice(0, 4);
};

// LOCALSTORAGE HANDLING
export const getFavoritesList = () => {
  const storagedFavorites = localStorage.getItem('@TMDB:favorites');
  if (storagedFavorites) {
    return storagedFavorites;
  }
  return '';
};

const storeFavorite = (movieDetailStringfied: string) => {
  return `The movie isn't in favorites list. Should STORE`;
};

const removeFavorite = (movieDetailStringfied: string) => {
  return `The movie is in favorites list. Should REMOVE`;
};

export const checkIfStoraged = (movieToCheck: string) => {
  const favoriteIsStoraged = getFavoritesList().includes(movieToCheck);
  if (favoriteIsStoraged) {
    console.log(removeFavorite(movieToCheck));
  } else {
    console.log(storeFavorite(movieToCheck));
  }

  return favoriteIsStoraged;
};
