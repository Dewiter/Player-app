import { useEffect, useState } from 'react';
import { Video } from 'ytubes/dist/types/data';
import { useFetch } from '../../hooks/useFetch';
import AudioPlayer from './AudioPlayer';
import type { YtResponse } from 'youtube-dl-exec';
import { useYTStream } from '../../hooks/useYTStream';

interface playerProps {
  queue: Video[];
}

const Player = ({ queue }: playerProps) => {
  const [queueIndex, setQueueIndex] = useState(0);
  // const stream = useYTStream('_BWPNPtsZm8');
  // console.log(stream);

  const src = [
    'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  ];

  return (
    <>
      <AudioPlayer src={src[queueIndex]} />
      <button
        onClick={() => setQueueIndex(queueIndex > 0 ? queueIndex - 1 : 0)}
      >
        prev
      </button>
      <button
        onClick={() =>
          setQueueIndex(queueIndex < src.length - 1 ? queueIndex + 1 : 0)
        }
      >
        next
      </button>
    </>
  );
};

export default Player;
