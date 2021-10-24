import { useFetch } from './useFetch';
import type { YtResponse } from 'youtube-dl-exec';

export const useYTStream = (id: string) => {
  const [stream, fetchStream] = useFetch<YtResponse>();
  fetchStream('/api/Youtube/getStream', {
    type: 'POST',
    body: id,
  });

  if (stream.error) return stream.error;
  if (!stream.loading) return stream.value?.formats[0].url;
};
