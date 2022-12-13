import { Item, DescriptionBox, Paragraph } from './TrendingMovieItem.styled';
import { NavLink } from 'react-router-dom';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const TrendingMovieItem = ({ poster, title, movieId }) => {
  return (
    <Item>
      <NavLink to={`/movies/${movieId}`}>
        <img src={`${BASE_URL_IMAGE}${poster}`} alt="" />
        <DescriptionBox>
          <Paragraph>{title}</Paragraph>
        </DescriptionBox>
      </NavLink>
    </Item>
  );
};
