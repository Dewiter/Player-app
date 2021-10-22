import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const CurrentSong = ({ current }) => {
  const [currentName, setcurrentName] = useState('');
  useEffect(() => {
    if (current) {
      console.log(currentName);
      setcurrentName(current.name);
    }
  }, [current]);
  return (
    <div className='current-song-container'>
      {/* <img src={pp} alt='' /> */}
      <Marquee gradient={false} className='current-song'>
        {currentName}
      </Marquee>
    </div>
  );
};

export default CurrentSong;
