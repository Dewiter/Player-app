import { useState } from "react";
import { Video } from "ytubes/dist/types/data";
import Player from "./Player/Player";
import Search from "./SearchBar/Search";

const App = () => {
  const [queue, setQueue] = useState<Video[]>([]);
  const addSong = (song: Video) => {
    setQueue([...queue, song]);
  };

  return (
    <>
      <Search addSong={addSong} />
      {/* <Player queue={queue} /> */}
    </>
  );
};

export default App;
