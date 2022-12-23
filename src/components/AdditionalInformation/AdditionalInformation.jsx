import { useLocation } from 'react-router-dom';
import { MdOutlineReviews, MdOutlineCastConnected } from 'react-icons/md';
import { GiFilmStrip } from 'react-icons/gi';
import { animateScroll as scroll } from 'react-scroll';
import { NavLinkStyled, List, Span } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  const location = useLocation();
  return (
    <List>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollMore(window.innerHeight)}
          to="cast"
          state={{ from: location?.state?.from }}
        >
          <Span>Cast</Span>
          <MdOutlineCastConnected />
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollMore(window.innerHeight)}
          to="reviews"
          state={{ from: location?.state?.from }}
        >
          <Span>Reviews</Span>
          <MdOutlineReviews />
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollMore(window.innerHeight)}
          to="trailer"
          state={{ from: location?.state?.from }}
        >
          <Span>Trailer</Span>
          <GiFilmStrip />
        </NavLinkStyled>
      </li>
    </List>
  );
};
