export const playerController = (state, action) => {
  const init = () => {
    state.audio.volume = state.volume;
    return {
      ...state,
      currentSong: action.payload,
      queue: [...state.queue, action.payload],
    };
  };

  const updateQueue = () => {
    const queue = [...state.queue, action.payload];
    return {
      ...state,
      queue: queue,
    };
  };

  const play = () => {
    if (state.queue.length > 0) {
      state.audio.src = state.currentSong.stream;
      state.audio.currentTime = state.currentTime;
      const safeguard =
        state.audio.currentTime > 0 &&
        !state.audio.paused &&
        !state.audio.ended &&
        state.audio.readyState > state.audio.HAVE_CURRENT_DATA;

      if (!safeguard) {
        state.audio.play();
      }
      return { ...state, isPlaying: true };
    } else {
      return state;
    }
  };

  const pause = () => {
    state.audio.pause();
    return {
      ...state,
      currentTime: state.audio.currentTime,
      isPlaying: false,
    };
  };

  const nextSong = () => {
    state.audio.currentTime = 0;
    state.audio.pause();
    const isPlaying = state.isPlaying ? state.isPlaying : true;
    if (state.currentSong.index + 1 < state.queue.length) {
      state.audio.src = state.queue[state.currentSong.index + 1].stream;
      state.audio.play();
      return {
        ...state,
        currentSong: state.queue[state.currentSong.index + 1],
        isPlaying: isPlaying,
      };
    } else {
      state.audio.src = state.queue[0].stream;
      state.audio.play();
      return {
        ...state,
        currentSong: state.queue[0],
        isPlaying: isPlaying,
      };
    }
  };

  const prevSong = () => {
    state.audio.currentTime = 0;
    state.audio.pause();
    const isPlaying = state.isPlaying ? state.isPlaying : true;
    if (state.audio.currentTime <= 5 || state.currentSong.index === 0) {
      state.audio.src = state.queue[0].stream;
      state.audio.play();
      return {
        ...state,
        currentSong: state.queue[0],
        isPlaying: isPlaying,
      };
    } else {
      state.audio.src = state.queue[state.currentSong.index - 1].stream;
      state.audio.play();
      return {
        ...state,
        currentSong: state.queue[state.currentSong.index - 1],
        isPlaying: isPlaying,
      };
    }
  };

  const changeSong = () => {
    console.log();
    const isPlaying = state.isPlaying ? state.isPlaying : true;
    state.audio.currentTime = 0;
    state.audio.pause();
    state.audio.src = action.payload.stream;
    state.audio.play();
    return {
      ...state,
      currentSong: action.payload,
      isPlaying: isPlaying,
    };
  };

  const setVolume = () => {
    state.audio.volume = parseFloat(action.payload);
    return { ...state };
  };

  const stateMachine = [
    { type: 'INIT', func: init },
    { type: 'UPDATE', func: updateQueue },
    { type: 'PLAY', func: play },
    { type: 'PAUSE', func: pause },
    { type: 'NEXT', func: nextSong },
    { type: 'PREV', func: prevSong },
    { type: 'VOLUME', func: setVolume },
    { type: 'CHANGE', func: changeSong },
  ];

  const found = stateMachine.find((current) => action.type === current.type);
  if (!found) {
    throw new Error('no matching states found');
  }
  return found.func();
};
