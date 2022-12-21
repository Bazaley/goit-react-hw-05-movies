import { Link, useLocation } from 'react-router-dom';
import { Item, DescriptionBox, Paragraph } from './MovieItem.styled';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const MovieItem = ({ poster, title, movieId }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        {poster ? (
          <img src={`${BASE_URL_IMAGE}${poster}`} alt="" />
        ) : (
          <img
            src="https://via.placeholder.com/400x600.png?text=Not%20image"
            alt=""
          />
        )}
      </Link>
      <DescriptionBox>
        <Paragraph>{title}</Paragraph>
      </DescriptionBox>
    </Item>
  );
};
