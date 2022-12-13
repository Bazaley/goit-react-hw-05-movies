import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/requestsForMovies';
import { CastList } from 'components/CastList/CastList';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const {
        data: { cast },
      } = await fetchCast(movieId);
      setCast(cast);
      console.log(cast);
    }
    fetch();
  }, [movieId]);
  return <CastList cast={cast} />;
};
