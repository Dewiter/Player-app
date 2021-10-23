import Inputs from './Inputs.tsx';
import Progress from './Progress';
import Volume from './Volume';
import CurrentSong from './CurrentSong';

const Player = ({ player, playerHandler }) => {
  return (
    <div className="player">
      {!player.currentSong.name ? (
        <div className="current-song-container"></div>
      ) : (
        <CurrentSong current={player.currentSong} />
      )}
      <Inputs player={player} playerHandler={playerHandler} />
      <Progress player={player} playerHandler={playerHandler} />
      <Volume playerHandler={playerHandler} />
    </div>
  );
};

export default Player;
