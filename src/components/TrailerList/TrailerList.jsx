export const TrailerList = ({ trailer: { results } }) => {
  console.log(results[0].key);
  return (
    <iframe
      width="760"
      height="315"
      style={{ margin: '0 auto', display: 'block' }}
      src={`https://www.youtube.com/embed/${results[0].key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
