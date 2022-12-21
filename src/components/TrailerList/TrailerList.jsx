import { Iframe } from './TrilerList.styled';

export const TrailerList = ({ trailer: { results } }) => {
  return (
    <Iframe
      src={`https://www.youtube.com/embed/${results[results.length - 1].key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></Iframe>
  );
};
