import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/requestsForMovies';
import { CastList } from 'components/CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      async function fetch() {
        const { data } = await fetchCast(movieId);
        setCast(data.cast);
      }
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return <CastList cast={cast} />;
};

export default Cast;
