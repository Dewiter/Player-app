import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import type { stream } from '../pages/api/Youtube/getStream';


// Custom hook -- useStream -- 
// Takes in a link and generates as stream readable by the audio player
export default function useStream() {
  const [stream, getStream] = useFetch<stream>();
  const [body, setBody] = useState<string>();
  console.log(body);

  useEffect(() => {
    if (!body) return;
    getStream('/api/Youtube/getStream', {
      method: 'POST',
      body: body,
    });
  }, [body, getStream]);

  return [stream, setBody] as const;
}
