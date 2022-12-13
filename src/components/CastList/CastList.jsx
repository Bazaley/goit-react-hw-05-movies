import { CastItem } from 'components/Castitem/CastItem';
import { List } from './CastList.styled';
export const CastList = ({ cast }) => {
  return (
    <List>
      {cast && cast.map(actor => <CastItem key={actor.id} actor={actor} />)}
    </List>
  );
};
