import React, { useState } from 'react';

const Volume = ({ playerHandler }) => {
  const [volume, setVolume] = useState(20);
  const updateVolume = (e) => {
    setVolume(e.target.volume);
    playerHandler({ type: 'VOLUME', payload: e.target.value / 100 });
  };
  return (
    <div className='volume-container'>
      <input
        className='volume'
        value={volume}
        onChange={(e) => updateVolume(e)}
        type='range'
      />
    </div>
  );
};

export default Volume;
