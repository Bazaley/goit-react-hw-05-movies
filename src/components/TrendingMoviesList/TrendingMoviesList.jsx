import { TrendingMovieItem } from 'components/TrendingMovieItem/TrendingMovieItem';
import { List } from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ id, poster_path, title }) => {
          return (
            <TrendingMovieItem
              key={id}
              poster={poster_path}
              title={title}
              movieId={id}
            />
          );
        })}
    </List>
  );
};
