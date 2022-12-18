import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/requestsForMovies';
import { CastList } from 'components/CastList/CastList';

import { Element } from 'react-scroll';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const {
        data: { cast },
      } = await fetchCast(movieId);
      setCast(cast);
    }
    fetch();
  }, [movieId]);
  return (
    <Element name="cast">
      <CastList cast={cast} />
    </Element>
  );
};
