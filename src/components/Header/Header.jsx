import { HeaderStyled } from './Header.styled';
import { Navigation } from 'components/Navigation/Navigation';
export const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};
