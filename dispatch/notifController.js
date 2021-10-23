export const notifController = (state, action) => {
  const addSong = () => {
    return {
      notifState: true,
      notifContent: 'Song was added to queue',
      notifType: 'success',
    };
  };

  const closeNotif = () => {
    return { ...state, notifState: false };
  };

  const emptyInput = () => {
    return {
      notifState: true,
      notifContent: 'Could not find song',
      notifType: 'fail',
    };
  };

  const badLink = () => {
    return {
      notifState: true,
      notifContent: 'Could not find song',
      notifType: 'fail',
    };
  };

  const stateMachine = [
    { type: 'ADD_SONG', func: addSong },
    { type: 'CLOSE_NOTIF', func: closeNotif },
    { type: 'EMPTY_INPUT', func: emptyInput },
    { type: 'BAD_LINK', func: badLink },
  ];

  const found = stateMachine.find((current) => action.type === current.type);
  if (!found) {
    throw new Error('no matching states found');
  }
  return found.func();
};
