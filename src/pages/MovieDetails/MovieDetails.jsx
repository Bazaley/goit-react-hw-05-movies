import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { fetchMovieById } from 'services/requestsForMovies';
import { DescriptionMovie } from 'components/DescriptionMovie/DescriptionMovie';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { LinkStyled, Paragraph } from './MovieDetails.styled';

const MovieDetails = () => {
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
          <Suspense
            fallback={
              <>
                <Paragraph>Please wait...</Paragraph>
                <ThreeCircles
                  height="100"
                  width="100"
                  color="#0b3bda"
                  wrapperStyle={{ justifyContent: 'center' }}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor=""
                  innerCircleColor=""
                  middleCircleColor=""
                />
              </>
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
