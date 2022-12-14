import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
    </>
  );
};
