import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: blue;
  text-decoration: none;
  color: white;
`;

export const Paragraph = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #e1900e;
`;
