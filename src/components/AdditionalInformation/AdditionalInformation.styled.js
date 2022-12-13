import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  padding: 30px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 500;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
