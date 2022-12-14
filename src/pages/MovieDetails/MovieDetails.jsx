import { useState, useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/requestsForMovies';
import { DescriptionMovie } from 'components/DescriptionMovie/DescriptionMovie';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  // const location = useLocation();

  useEffect(() => {
    async function fetch() {
      const { data } = await fetchMovieById(movieId);
      console.log(data);
      setMovie(data);
    }
    fetch();
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          {/* {location.state.from && <Link to={location.state.from}>back</Link>} */}

          <DescriptionMovie movie={movie} />
          <AdditionalInformation />
          <Outlet />
        </>
      )}
    </>
  );
};
