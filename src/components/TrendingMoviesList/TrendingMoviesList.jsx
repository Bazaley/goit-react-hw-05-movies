export const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
    </ul>
  );
};
