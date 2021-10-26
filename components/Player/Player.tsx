import React, { useEffect, useState } from 'react';
import { Video } from 'ytubes/dist/types/data';
import AudioPlayer from './AudioPlayer';
import useStream from '../../hooks/useStream';

interface playerProps {
  queue: Video[];
}

const Player = ({ queue }: playerProps) => {
  const [queueIndex, setQueueIndex] = useState(0);
  const [src, setSrc] = useState<string>();
  const [stream, setBody] = useStream();

  useEffect(() => {
    if (queue.length === 0) return;
    setBody(queue[queueIndex].id);
    if (stream.error) return;
    if (!stream.loading) {
      setSrc(stream.value?.stream);
    }
  }, [queue, queueIndex, setBody]);

  return (
    <>
      <AudioPlayer src={src} />
      <button
        onClick={() => setQueueIndex(queueIndex > 0 ? queueIndex - 1 : 0)}
      >
        prev
      </button>
      <button
        onClick={() =>
          setQueueIndex(queueIndex < queue.length - 1 ? queueIndex + 1 : 0)
        }
      >
        next
      </button>
    </>
  );
};

export default React.memo(Player);
