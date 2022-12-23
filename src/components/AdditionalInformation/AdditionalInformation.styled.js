import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Box = styled.div`
//   margin-bottom: 50px;
//   padding: 30px;
//   border-top: 2px solid gray;
//   border-bottom: 2px solid gray;
// `;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;

  margin-bottom: 50px;
  padding: 30px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const Span = styled.span`
  margin-right: 10px;
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  text-decoration: none;

  &.active {
    color: #e1900e;
  }
`;
