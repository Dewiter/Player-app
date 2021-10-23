import { useState, useReducer } from 'react';
import Player from './Player/Player';
import Search from './SearchBar/Search2';
import Playlist from './Queue/Queue';

import { notifController } from '../dispatch/notifController';
import { playerController } from '../dispatch/playerController';
import Notification from './Notifaction/Notification';

function App() {
  const audio = document.querySelector('#audio');
  const queue = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [notif, dispatchNotif] = useReducer(notifController, {
    notifState: false,
    notifContent: '',
    notifType: '',
  });

  const closeNotif = () => {
    dispatchNotif({ type: 'CLOSE_NOTIF' });
  };

  return (
    <div className="app">
      {/* <aside className="nav">
        <Profil />
        <Navigation />
      </aside> */}
      <div className="main">
        <header className="header">
          <Search queue={queue} />
        </header>
        {/* <Playlist
          queue={queue}
          current={currentSong}
          playerHandler={dispatchPlayer}
        /> */}
      </div>
      {/* {player.queue.length && (
        <Player player={player} playerHandler={dispatchPlayer} />
      )} */}

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
