import { Item, Paragraph } from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <Item>
      <Paragraph head>Author: {author}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </Item>
  );
};
