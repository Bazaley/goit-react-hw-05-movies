import axios from 'axios';

const API_KEY = '4f349eaa26ab680508bb40abbe6da2af';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrandingMovies = async () => {
  return await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieById = async movieId => {
  return await axios.get(`${BASE_URL}movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchCast = async movieId => {
  return await axios.get(`${BASE_URL}movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieReviews = async movieId => {
  return await axios.get(`${BASE_URL}movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
