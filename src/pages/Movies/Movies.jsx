import { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { QueryForm } from 'components/QueryForm/QueryForm';
import { fetchMovieBySearchQuery } from 'services/requestsForMovies';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { debounce } from 'debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetch() {
      const {
        data: { total_pages, results },
      } = await fetchMovieBySearchQuery(query, currentPage);

      if (!results.length) {
        Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again',
          {
            width: '500px',
            position: 'center-top',
            distance: '250px',
          }
        );
        setMovies([]);
        setCurrentPage(1);
      }

      if (total_pages === currentPage) return;

      setMovies(state => [...state, ...results]);
    }
    fetch();
  }, [query, currentPage]);

  useEffect(() => {
    const scrollHandler = e => {
      if (
        e.target.documentElement.scrollHeight ===
        e.target.documentElement.scrollTop + window.innerHeight
      ) {
        setCurrentPage(state => state + 1);
      }
    };
    document.addEventListener('scroll', debounce(scrollHandler, 200));
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <PageHeading text="Find your movie" />
      <QueryForm setSearchParams={setSearchParams} setMovies={setMovies} />
      {movies && (
        <>
          <MoviesList movies={movies} />
          <Outlet />
        </>
      )}
    </>
  );
};
export default Movies;
