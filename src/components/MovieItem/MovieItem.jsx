import { Item, DescriptionBox, Paragraph } from './MovieItem.styled';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const MovieItem = ({ poster, title, movieId }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <img src={poster && `${BASE_URL_IMAGE}${poster}`} alt="" />
      </Link>
      <DescriptionBox>
        <Paragraph>{title}</Paragraph>
      </DescriptionBox>
    </Item>
  );
};
