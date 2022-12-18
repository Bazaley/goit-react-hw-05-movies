import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin-bottom: 50px;
  padding: 30px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: blue;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
