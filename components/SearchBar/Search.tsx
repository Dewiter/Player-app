import { useState } from 'react';
import Suggestions from './Suggestions';
import type { Video } from 'ytubes/dist/types/data';

interface SearchProps {
  onFound: (video: Video) => void;
}

const Search = ({ onFound }: SearchProps) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Suggestions searchString={value} onFound={onFound} />
    </>
  );
};

export default Search;
