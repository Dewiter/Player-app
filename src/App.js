import React, { useReducer } from 'react';
import Player from './components/player/Player';
import Search from './components/player/Search';
import Playlist from './components/player/Playlist';
import Profil from './nav/Profil';
import Navigation from './nav/Navigation';

import { notifController } from './controller/notifController';
import { playerController } from './controller/playerController';
import Notification from './components/notifaction/Notification';

function App() {
  const audio = document.querySelector('#audio');
  const [notif, dispatchNotif] = useReducer(notifController, {
    notifState: false,
    notifContent: '',
    notifType: '',
  });

  const [player, dispatchPlayer] = useReducer(playerController, {
    currentSong: {},
    queue: [],
    currentTime: 0,
    audio: audio,
    isPlaying: false,
    volume: 0.2,
  });

  const closeNotif = () => {
    dispatchNotif({ type: 'CLOSE_NOTIF' });
  };

  return (
    <div className='app'>
      <aside className='nav'>
        <Profil />
        <Navigation />
      </aside>
      <div className='main'>
        <header className='header'>
          <Search
            notifHandler={dispatchNotif}
            player={player}
            playerHandler={dispatchPlayer}
          />
        </header>
        <Playlist
          queue={player.queue}
          current={player.currentSong}
          playerHandler={dispatchPlayer}
        />
      </div>
      {player.queue.length && (
        <Player player={player} playerHandler={dispatchPlayer} />
      )}

      {notif.notifState && (
        <Notification
          notifContent={notif.notifContent}
          notifType={notif.notifType}
          closeNotif={closeNotif}
        />
      )}
    </div>
  );
}

export default App;
