import {
  Box,
  Paragraph,
  Item,
  NavLinkStyled,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <Box>
      <Paragraph>Additional information</Paragraph>
      <ul>
        <Item>
          <NavLinkStyled to="cast">Cast</NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled to="reviews"> Reviews</NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled to="trailer"> Trailer</NavLinkStyled>
        </Item>
      </ul>
    </Box>
  );
};
