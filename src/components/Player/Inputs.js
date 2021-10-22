import React, { useEffect } from 'react';
import Button from '../Buttons/Button';
const Inputs = ({ player, playerHandler }) => {
  const next = React.createRef();
  const prev = React.createRef();

  return (
    <div className="btn-media-container">
      <Button
        ref={prev}
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
        ref={next}
        content="forward"
        onclick={() => playerHandler({ type: 'NEXT' })}
        customClass="btn-media, btn-prev-next"
      />
    </div>
  );
};

export default Inputs;
