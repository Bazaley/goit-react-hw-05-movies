import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-left: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    color: tomato;
  }
`;
