import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import type { Video } from 'ytubes/dist/types/data';

interface SuggestionsProps {
  addSong: (song: Video) => void;
  input: HTMLInputElement;
  inputValue: string;
}

const Suggestions = ({ addSong, input, inputValue }: SuggestionsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, fetchData] = useFetch<Video[]>();

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      addSong(data.value[selectedIndex]);
      input.value = '';
    }

    if (event.code === 'ArrowUp') {
      setSelectedIndex(
        selectedIndex > 0 ? selectedIndex - 1 : data.value?.length - 1
      );
    }
    if (event.code === 'ArrowDown') {
      setSelectedIndex(
        selectedIndex < data.value?.length - 1 ? selectedIndex + 1 : 0
      );
    }
  };

  useEffect(() => {
    if (!inputValue) return;
    fetchData(`api/Youtube/getSuggestions`, {
      method: 'POST',
      body: inputValue,
    });
  }, [inputValue, fetchData]);

  if (!inputValue) return null;
  if (data.error) return <p>{data.error}</p>;
  if (data.loading) return <p>Loading ...</p>;

  input.onkeyup = handleKeyPress;

  return (
    <div>
      {data.value?.map((video, index) => (
        <p
          className={clsx({ selected: index === selectedIndex })}
          key={video.id}
          onClick={() => addSong(video)}
        >
          {video.title}
        </p>
      ))}
    </div>
  );
};

export default Suggestions;
