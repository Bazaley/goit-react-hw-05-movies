import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/requestsForMovies';
import { ReviewList } from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const {
        data: { results },
      } = await fetchMovieReviews(movieId);
      setReviews(results);
    }
    fetch();
  }, [movieId]);
  return <>{reviews && <ReviewList reviews={reviews} />}</>;
};
export default Reviews;
