import api from './api';

export const getTrendingMovies = async () => {
  try {
    const { data, status } = await api.get(
      `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&page=1`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
};

export const getDetailMovie = async (movieId: string) => {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
};

export const getSocialMovie = async (id: number) => {
  try {
    const { data, status } = await api.get(
      `/movie/${id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
};
