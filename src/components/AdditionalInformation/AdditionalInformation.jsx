import { useLocation } from 'react-router-dom';
import { MdOutlineReviews, MdOutlineCastConnected } from 'react-icons/md';
import { GiFilmStrip } from 'react-icons/gi';
import { animateScroll as scroll } from 'react-scroll';
import {
  Box,
  Paragraph,
  Item,
  NavLinkStyled,
  List,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  const location = useLocation();
  return (
    <Box>
      <Paragraph>Additional information</Paragraph>
      <List>
        <Item>
          <NavLinkStyled
            onClick={() => scroll.scrollMore(window.innerHeight)}
            to="cast"
            state={{ from: location.state.from }}
          >
            Cast <MdOutlineCastConnected />
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled
            onClick={() => scroll.scrollMore(window.innerHeight)}
            to="reviews"
            state={{ from: location.state.from }}
          >
            Reviews <MdOutlineReviews />
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled
            onClick={() => scroll.scrollMore(window.innerHeight)}
            to="trailer"
            state={{ from: location.state.from }}
          >
            Trailer <GiFilmStrip />
          </NavLinkStyled>
        </Item>
      </List>
    </Box>
  );
};
