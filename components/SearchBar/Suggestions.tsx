import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';
import type { Video } from 'ytubes/dist/types/data';

interface SuggestionsProps {
  searchString: string;
  onFound: (video: Video) => void;
}

const Suggestions = ({ searchString, onFound }: SuggestionsProps) => {
  const [data, fetchData] = useFetch<Video[]>();

  useEffect(() => {
    if (!searchString) return;

    fetchData(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}youtube/suggestions/${searchString}`
    );
  }, [searchString, fetchData]);

  if (!searchString) return null;
  if (data.error) return <p>{data.error}</p>;
  if (data.loading) return <p>Loading ...</p>;
  return (
    <div>
      {data.value?.map((video) => (
        <p key={video.id} onClick={(e) => onFound(video)}>
          {video.title}
        </p>
      ))}
    </div>
  );
};

export default Suggestions;
