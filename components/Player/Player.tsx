import React, { useEffect, useState } from 'react';
import { Video } from 'ytubes/dist/types/data';
import AudioPlayer from './AudioPlayer';
import useStream from '../../hooks/useStream';

interface playerProps {
  queue: Video[];
}

const Player = ({ queue }: playerProps) => {
  const [queueIndex, setQueueIndex] = useState(0);
  const [stream, setBody] = useStream();

  const prevSong = () => {
    setQueueIndex(queueIndex > 0 ? queueIndex - 1 : 0);
    setBody(queue[queueIndex].id);
  };

  const nextSong = () => {
    setQueueIndex(queueIndex < queue.length - 1 ? queueIndex + 1 : 0);
    setBody(queue[queueIndex].id);
  };

  useEffect(() => {
    if (queue.length === 1) setBody(queue[queueIndex].id);
  }, [setBody, queue, queueIndex]);

  return (
    <>
      <AudioPlayer
        src={!stream.loading ? stream.value?.stream : stream.value?.stream}
      />
      <button onClick={prevSong}>prev</button>
      <button onClick={nextSong}>next</button>
    </>
  );
};

export default React.memo(Player);
