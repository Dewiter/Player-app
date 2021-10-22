import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Song = React.memo(({ current, song, playerHandler }) => {
  const badge = (media) => {
    switch (media) {
      case 'youtube':
        return (
          <div className={'source youtube'}>
            <FontAwesomeIcon icon={faYoutube} size='lg' />
          </div>
        );

      default:
        return <p>placeholder</p>;
    }
  };

  const exerp = () => {
    if (song?.name?.length >= 60) {
      return song.name.slice(0, 60);
    }
    return song.name;
  };

  if (current.index === song.index) {
    return (
      <button
        className='song song-active'
        onClick={() => playerHandler({ type: 'CHANGE', payload: song })}
      >
        <p>{exerp()}</p>
        {badge(song.source)}
      </button>
    );
  } else {
    return (
      <button
        className='song'
        onClick={() => playerHandler({ type: 'CHANGE', payload: song })}
      >
        <p>{exerp()}</p>
        {badge(song.source)}
      </button>
    );
  }
});

export default Song;
