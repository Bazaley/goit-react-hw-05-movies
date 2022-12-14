import { Item, DescriptionBox, Paragraph } from './CastItem.styled';
const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const CastItem = ({ actor: { profile_path, name, character } }) => {
  return (
    <Item>
      {profile_path ? (
        <img src={`${BASE_URL_IMAGE}${profile_path}`} alt={name} />
      ) : (
        'Not Photo'
      )}

      <DescriptionBox>
        <Paragraph>{name}</Paragraph>
        <Paragraph>Character: {character}</Paragraph>
      </DescriptionBox>
    </Item>
  );
};
