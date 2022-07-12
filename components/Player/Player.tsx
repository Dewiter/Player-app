import React, { useContext, useEffect, useState } from "react";
import { Video } from "ytubes/dist/types/data";
import AudioPlayer from "./AudioPlayer";
import { useStream } from "../../hooks/useStream";
import { stream } from "../../pages/api/Youtube/getStream";
import { Button } from "@chakra-ui/react";

import type { StreamInterface } from "../../hooks/useStream";

interface playerProps {
  queue: Video[];
}

const Player = ({ queue }: playerProps) => {
  const streamContext = React.createContext(queue);
  const stream = useContext(streamContext);
  const [currentSongID, setCurrentSongID] = useState(0);
  const { prevStream, currStream, nextStream }: StreamInterface = useStream({
    currentSongID,
    queue,
  });

  const playNextSong = () => {
    if (currentSongID < queue.length - 1) {
      setCurrentSongID(currentSongID + 1);
    } else {
      setCurrentSongID(0);
    }
  };

  const playPrevSong = () => {
    if (currentSongID > 0) {
      setCurrentSongID(currentSongID - 1);
    } else {
      setCurrentSongID(0);
    }
  };

  useEffect(() => {
    console.log(currStream);
  }, [currStream]);

  // DOM
  return (
    <streamContext.Provider value={queue}>
      <AudioPlayer src={currStream} />
      <button onClick={playPrevSong}>previous</button>
      <button onClick={playNextSong}>next</button>
    </streamContext.Provider>
  );
};

export default Player;
