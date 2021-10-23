import Button from '../Button/Button';

export type PlayerType = {
  player: any;
  playerHandler: Function;
};
const Inputs = ({ player, playerHandler }: PlayerType) => {
  return (
    <div className="btn-media-container">
      <Button
        content="backward"
        onclick={() => playerHandler({ type: 'PREV' })}
        customClass="btn-media, btn-prev-next"
      />

      {!player?.isPlaying ? (
        <Button
          content="play"
          onclick={() => playerHandler({ type: 'PLAY' })}
          customClass="btn-media, btn-play"
        />
      ) : (
        <Button
          content="pause"
          onclick={() => playerHandler({ type: 'PAUSE' })}
          customClass="btn-media, btn-play"
        />
      )}
      <Button
        content="forward"
        onclick={() => playerHandler({ type: 'NEXT' })}
        customClass="btn-media, btn-prev-next"
      />
    </div>
  );
};

export default Inputs;
