import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
      <input type="text" value={value} onChange={handleInput} />

      <button type="submit">Search</button>
    </form>
  );
};
