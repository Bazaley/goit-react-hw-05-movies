import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/requestsForMovies';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const {
        data: { results },
      } = await fetchMovieReviews(movieId);
      setReviews(results);
      console.log(results);
    }
    fetch();
  }, [movieId]);
  return <p>ok</p>;
};
