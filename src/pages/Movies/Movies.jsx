import { PageHeading } from 'components/PageHeading/PageHeading';
import { useParams } from 'react-router-dom';
export const Movies = () => {
  console.log(useParams());
  return (
    <>
      <PageHeading text="Movies" />
    </>
  );
};
