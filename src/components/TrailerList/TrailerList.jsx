import { Iframe } from './TrilerList.styled';

export const TrailerList = ({ trailer: { results } }) => {
  console.log(results[0].key);
  return (
    <Iframe
      src={`https://www.youtube.com/embed/${results[0].key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></Iframe>
  );
};
