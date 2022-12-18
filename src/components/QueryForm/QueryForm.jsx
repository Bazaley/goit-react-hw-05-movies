import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Wrapper, Input, Button } from './QueryForm.styled';
import { BsSearch } from 'react-icons/bs';

export const QueryForm = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: value });

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
