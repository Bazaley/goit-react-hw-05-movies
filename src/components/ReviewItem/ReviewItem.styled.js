import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ head }) => (head ? '20px' : '0')};
  font-size: ${({ head }) => (head ? '22px' : '18px')};
  font-weight: ${({ head }) => (head ? '700' : '400')};
`;
