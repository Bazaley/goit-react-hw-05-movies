import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/requestsForMovies';
import { DescriptionMovie } from 'components/DescriptionMovie/DescriptionMovie';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkStyled } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  useEffect(() => {
    async function fetch() {
      const { data } = await fetchMovieById(movieId);

      setMovie(data);
    }
    fetch();
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <LinkStyled to={location.state.from}>
            <AiOutlineArrowLeft />
            BACK
          </LinkStyled>

          <DescriptionMovie movie={movie} />
          <AdditionalInformation />
          <Outlet />
        </>
      )}
    </>
  );
};
