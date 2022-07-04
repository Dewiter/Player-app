import React, { useEffect, useState } from "react";
import { Video } from "ytubes/dist/types/data";
import AudioPlayer from "./AudioPlayer";
import useStream from "../../hooks/useStream";
import { stream } from "../../pages/api/Youtube/getStream";
import { Button } from "@chakra-ui/react";

interface playerProps {
  queue: Video[];
}

const Player = ({ queue }: playerProps) => {
  const [src, setSrc] = useStream();
  const [index, setIndex] = useState(0);

  const playNextSong = () => {
    if (index < queue.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };

  const playPrevSong = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };

  useEffect(() => {
    if (queue.length > 0) {
      setSrc(queue[index].id);
    }
    console.log(queue.length);
  }, [queue, index]);

  // DOM
  return (
    <>
      <AudioPlayer src={!src.loading ? src.value?.stream ?? "" : ""} />
      <button onClick={playPrevSong}>previous</button>
      <button onClick={playNextSong}>next</button>
    </>
  );
};

export default Player;
