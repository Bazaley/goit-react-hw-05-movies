import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/requestsForMovies';
import { DescriptionMovie } from 'components/DescriptionMovie/DescriptionMovie';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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
          <DescriptionMovie movie={movie} />
          <AdditionalInformation />
        </>
      )}
    </>
  );
};
