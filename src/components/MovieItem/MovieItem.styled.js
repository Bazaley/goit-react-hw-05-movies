import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.2),
    0px 1px 1px 0px rgba(255, 255, 255, 0.14),
    0px 2px 1px -1px rgba(255, 255, 255, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const DescriptionBox = styled.div`
  padding: 20px 0 20px 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
