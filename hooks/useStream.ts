import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import type { stream } from '../pages/api/Youtube/getStream';

export default function useStream() {
  const [stream, getStream] = useFetch<stream>();
  const [body, setBody] = useState<string>();

  useEffect(() => {
    if (!body) return;
    getStream('/api/Youtube/getStream', {
      method: 'POST',
      body: body,
    });
  }, [body, getStream]);

  return [stream, setBody] as const;
}
