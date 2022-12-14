import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { List } from './ReviewList.styled';
export const ReviewList = ({ reviews }) => {
  return (
    <List>
      {reviews.length ? (
        reviews.map(({ author, content, id }) => (
          <ReviewItem key={id} author={author} content={content} />
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </List>
  );
};
