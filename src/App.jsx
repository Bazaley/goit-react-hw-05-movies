import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
const Trailer = lazy(() => import('pages/Trailer/Trailer'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<Trailer />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
