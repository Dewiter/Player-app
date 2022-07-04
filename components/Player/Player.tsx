import React, { useEffect, useState } from 'react';
import { Video } from 'ytubes/dist/types/data';
import AudioPlayer from './AudioPlayer';
import useStream from '../../hooks/useStream';
import { stream } from '../../pages/api/Youtube/getStream';
import { Button } from '@chakra-ui/react';

interface playerProps {
  queue: Video[];
}



const Player = ({ queue }: playerProps) => {
    // Step 1 Button to dom
    // link butt to event
    const [src, setSrc] = useStream();
    if (queue.length > 0) {
      setSrc((queue[0].id));
    }

  // DOM
  return (
    <>
      {/* <AudioPlayer src={!src.loading ? src.value : ""} /> */}
      <button>test</button>
      <button>test2</button>
    </>
  );
};

export default (Player);
