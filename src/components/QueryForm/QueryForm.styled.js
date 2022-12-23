import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  font-size: 18px;
  color: white;
  text-align: center;
  &:focus {
    outline: 1px solid white;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 11px;
  right: 0;
  border: none;
  background-color: transparent;

  color: white;
  cursor: pointer;
`;
