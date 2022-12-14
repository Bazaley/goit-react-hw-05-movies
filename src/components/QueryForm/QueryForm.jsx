import { useState } from 'react';

export const QueryForm = ({ setQuery }) => {
  const [value, setValue] = useState('');

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleInput} />

      <button type="submit">Search</button>
    </form>
  );
};
