import React, { useReducer } from 'react';
import Player from './Player/Player';
import Search from './SearchBar/Search';
import Playlist from './Queue/Queue';
import Profil from './Nav/Profil';
import Navigation from './Nav/Navigation';

import { notifController } from '../dispatch/notifController';
import { playerController } from '../dispatch/playerController';
import Notification from './Notifaction/Notification';

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
    <div className="app">
      <aside className="nav">
        <Profil />
        <Navigation />
      </aside>
      <div className="main">
        <header className="header">
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
