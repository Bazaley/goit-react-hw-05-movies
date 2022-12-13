import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Section>
    </Container>
  );
};
