import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { Paragraph } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Suspense
              fallback={
                <>
                  <Paragraph>Please wait...</Paragraph>
                  <ThreeCircles
                    height="100"
                    width="100"
                    color="#e1900es"
                    wrapperStyle={{ justifyContent: 'center' }}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                  />
                </>
              }
            >
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};
