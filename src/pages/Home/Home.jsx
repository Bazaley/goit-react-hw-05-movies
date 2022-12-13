import { useState, useEffect } from 'react';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { fetchTrandingMovies } from 'services/requestsForMovies';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    try {
      async function fetch() {
        const {
          data: { results },
        } = await fetchTrandingMovies();
        setMovies(results);
      }
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <PageHeading text="Trending today" />
      <TrendingMoviesList movies={movies} />
    </>
  );
};
