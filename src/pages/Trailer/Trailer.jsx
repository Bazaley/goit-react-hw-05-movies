import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/requestsForMovies';
import { TrailerList } from 'components/TrailerList/TrailerList';

const Trailer = () => {
  const [trailer, setTrailer] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetch() {
      const {
        data: { videos },
      } = await fetchMovieById(movieId);

      setTrailer(videos);
    }
    fetch();
  }, [movieId]);
  return <>{trailer && <TrailerList trailer={trailer} />}</>;
};
export default Trailer;
