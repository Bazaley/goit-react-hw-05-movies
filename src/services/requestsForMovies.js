import axios from 'axios';

const API_KEY = '4f349eaa26ab680508bb40abbe6da2af';
const BASE_URL = 'https://api.themoviedb.org/3/';
// const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const fetchTrandingMovies = async () => {
  return await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
};
