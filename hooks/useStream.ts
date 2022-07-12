import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import type { stream } from "../pages/api/Youtube/getStream";
import { Video } from "ytubes/dist/types/data";

// Custom hook -- useStream --
// Takes in a link and generates as stream readable by the audio player
interface body {
  currentSongID: number;
  queue: Video[];
}

export interface StreamInterface {
  prevStream: string;
  currStream: string;
  nextStream: string;
}

interface postForStream {
  url: string;
  id: string;
}

export const useStream = ({ currentSongID, queue }: body): StreamInterface => {
  const [fetchedStreams, setFetchedStreams] = useState<StreamInterface>({
    prevStream: "",
    currStream: "",
    nextStream: "",
  });

  useEffect(() => {
    const { data, error } =
      !!queue[currentSongID] &&
      useFetch<stream>("/api/Youtube/getStream", {
        body: queue[currentSongID].id,
      });
    if (data) setFetchedStreams({ ...fetchedStreams, currStream: data.stream });
  }, [queue.length]);
  console.log(fetchedStreams);

  return fetchedStreams;
};
