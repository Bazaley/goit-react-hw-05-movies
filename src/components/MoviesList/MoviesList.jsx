import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(({ id, poster_path, title }) => {
          return (
            <MovieItem
              key={id}
              poster={poster_path}
              title={title}
              movieId={id}
            />
          );
        })}
      </List>
    </>
  );
};
