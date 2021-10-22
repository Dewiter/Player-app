import React from 'react';
import Song from './Song';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Playlist = ({ queue, current, playerHandler }) => {
  const getQueue = () => {
    return queue.map((value) => {
      return (
        <CSSTransition timeout={1000} classNames='song'>
          <Song
            key={value.key}
            name={value.name}
            source={value.source}
            current={current}
            index={value.index}
            song={value}
            playerHandler={playerHandler}
          />
        </CSSTransition>
      );
    });
  };

  return (
    <div className='playlist'>
      <h1 className='playlist-title'>Your Queue</h1>
      <div className='songList'>
        {queue.length === 0 ? (
          <h3>Queue is empty</h3>
        ) : (
          <TransitionGroup>{getQueue()}</TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default Playlist;
