import { useState, useRef } from 'react';
import Suggestions from './Suggestions';
import type { Video } from 'ytubes/dist/types/data';

interface SearchProps {
  queue: Video[];
  setQueue: (queue: Video[]) => void;
}

const Search = ({ queue, setQueue }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="search"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        ref={inputRef}
      />
      <Suggestions
        setQueue={setQueue}
        queue={queue}
        input={inputRef.current}
        inputValue={inputValue}
      />
    </>
  );
};

export default Search;
