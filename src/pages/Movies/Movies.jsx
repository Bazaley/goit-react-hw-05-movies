import { useState, useEffect } from 'react';
import { QueryForm } from 'components/QueryForm/QueryForm';
import { fetchMovieBySearchQuery } from 'services/requestsForMovies';
import { useSearchParams, useLocation, Outlet } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetch() {
      const {
        data: { results },
      } = await fetchMovieBySearchQuery(query);
      setSearchParams({ query });
      setMovies(results);
      console.log(movies);
    }
    fetch();
  }, [query, setSearchParams]);
  return (
    <>
      <QueryForm setQuery={setQuery} />
      {movies && (
        <>
          <MoviesList movies={movies} />
          <Outlet />
        </>
      )}
    </>
  );
};
