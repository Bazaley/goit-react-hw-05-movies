import { useLocation } from 'react-router-dom';
import {
  Box,
  Paragraph,
  Item,
  NavLinkStyled,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  const location = useLocation();
  return (
    <Box>
      <Paragraph>Additional information</Paragraph>
      <ul>
        <Item>
          <NavLinkStyled to="cast" state={{ from: location.state.from }}>
            Cast
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled to="reviews" state={{ from: location.state.from }}>
            Reviews
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled to="trailer" state={{ from: location.state.from }}>
            Trailer
          </NavLinkStyled>
        </Item>
      </ul>
    </Box>
  );
};
