import { Nav, StyledNavLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Nav>
  );
};
