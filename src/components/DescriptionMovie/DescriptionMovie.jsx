import { Box, Img, Description, Paragraph } from './Description.styled';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const DescriptionMovie = ({
  movie: { poster_path, genres, title, release_date, vote_average, overview },
}) => {
  const genresNames = genres.map(({ name }) => name).join(',');

  return (
    <Box>
      <Img src={`${BASE_URL_IMAGE}${poster_path}`} alt="" />
      <Description>
        <Paragraph head>
          {title} ({release_date.slice(0, 4)})
        </Paragraph>
        <Paragraph>User Score: {Math.round(vote_average * 10)}%</Paragraph>
        <Paragraph head>Overview</Paragraph>
        <Paragraph>{overview}</Paragraph>
        <Paragraph head>Genres</Paragraph>
        <Paragraph>{genresNames}</Paragraph>
      </Description>
    </Box>
  );
};
