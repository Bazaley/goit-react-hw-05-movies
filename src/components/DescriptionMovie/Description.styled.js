import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Description = styled.div`
  padding: 20px 0 0 20px;
`;

export const Paragraph = styled.p`
  font-size: ${({ head }) => (head ? '24px' : '18px')};
  font-weight: ${({ head }) => (head ? '700' : '400')};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
