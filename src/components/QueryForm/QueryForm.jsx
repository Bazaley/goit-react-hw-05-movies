import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Wrapper, Input, Button } from './QueryForm.styled';

export const QueryForm = ({ setSearchParams, setMovies }) => {
  const [value, setValue] = useState('');

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: value });
    setMovies([]);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Input type="text" value={value} onChange={handleInput} />

        <Button type="submit">
          <BsSearch />
        </Button>
      </Wrapper>
    </form>
  );
};
