import { Item, DescriptionBox, Paragraph } from './MovieItem.styled';
import { NavLink, useLocation } from 'react-router-dom';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const MovieItem = ({ poster, title, movieId }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <Item>
      <NavLink
        to={`/movies/${movieId}`}
        state={{ from: `${location.pathname}${location.search}` }}
      >
        <img src={`${BASE_URL_IMAGE}${poster}`} alt="" />
        <DescriptionBox>
          <Paragraph>{title}</Paragraph>
        </DescriptionBox>
      </NavLink>
    </Item>
  );
};
