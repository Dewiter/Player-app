import React, { useRef } from 'react';

const Progress = ({ player, playerHandler }) => {
  const progressRef = useRef(null);

  player.audio.addEventListener('timeupdate', () => {
    if (progressRef.current) {
      const progressBar = Object.values(progressRef?.current?.childNodes);
      const total = progressBar.length;
      if (player.audio.currentTime === 0) {
        progressRef.current.childNodes.forEach((bars) => {
          bars.style.fill = '#4c5362';
          bars.style.filter = 'none';
        });
      }

      const percentage = player.audio.currentTime / player.audio.duration;
      const bar = Math.floor(percentage * total);
      if (progressBar[bar]) {
        const tmp = progressBar.slice(0, bar);
        tmp.forEach((element) => {
          element.style.fill = '#b3679b';
          element.style.filter = 'drop-shadow(0px 0px 10px #836fee)';
        });
      }
      if (player.audio.currentTime >= player.audio.duration) {
        playerHandler({ type: 'NEXT' });
      }
    }
  });
  return (
    <div className='progress-container'>
      <svg
        ref={progressRef}
        className='progress'
        width='1292'
        height='150'
        viewBox='0 0 1292 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='19.5472'
          height='148'
          rx='9.77359'
          transform='matrix(-1 0 0 1 19.5474 0)'
          fill='white'
        />
        <rect
          width='20.1057'
          height='27.366'
          rx='10'
          transform='matrix(-1 0 0 1 50.8228 60.317)'
          fill='white'
        />
        <rect
          width='18.4302'
          height='82.6566'
          rx='9.21509'
          transform='matrix(-1 0 0 1 79.8643 31.834)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='83.2924'
          rx='9.90504'
          transform='matrix(-1 0 0 1 113.387 31.516)'
          fill='white'
        />
        <rect
          width='20.2603'
          height='121.112'
          rx='10'
          transform='matrix(-1 0 0 1 144.453 12.6064)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='25.6631'
          rx='9.90504'
          transform='matrix(-1 0 0 1 174.168 60.3307)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.1791'
          rx='9.90504'
          transform='matrix(-1 0 0 1 205.685 44.5727)'
          fill='white'
        />
        <rect
          width='20.1057'
          height='99.4113'
          rx='10'
          transform='matrix(-1 0 0 1 236.242 23.4566)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.1791'
          rx='9.90504'
          transform='matrix(-1 0 0 1 266.466 44.5727)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='25.9116'
          rx='9.97859'
          transform='matrix(-1 0 0 1 299.506 60.2626)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='56.9831'
          rx='9.97859'
          transform='matrix(-1 0 0 1 329.875 44.6707)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='35.2218'
          rx='9.97859'
          transform='matrix(-1 0 0 1 360.245 55.5514)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.6294'
          rx='9.90504'
          transform='matrix(-1 0 0 1 391.656 44.5727)'
          fill='white'
        />
        <rect
          width='20.1521'
          height='89.8286'
          rx='10'
          transform='matrix(-1 0 0 1 422.341 28.248)'
          fill='white'
        />
        <rect
          width='19.8642'
          height='146.325'
          rx='9.9321'
          transform='matrix(-1 0 0 1 452.569 0)'
          fill='white'
        />
        <rect
          width='20'
          height='48'
          rx='10'
          transform='matrix(-1 0 0 1 484.355 49)'
          fill='white'
        />
        <rect
          width='20'
          height='48'
          rx='10'
          transform='matrix(-1 0 0 1 514.355 49)'
          fill='white'
        />
        <rect
          width='20'
          height='48'
          rx='10'
          transform='matrix(-1 0 0 1 544.355 49)'
          fill='white'
        />
        <rect
          width='20'
          height='48'
          rx='10'
          transform='matrix(-1 0 0 1 577.355 49)'
          fill='white'
        />
        <rect
          width='20'
          height='48'
          rx='10'
          transform='matrix(-1 0 0 1 608.355 49)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='47.8414'
          rx='9.97859'
          transform='matrix(-1 0 0 1 638.355 49.4467)'
          fill='white'
        />
        <rect
          width='19.5472'
          height='148'
          rx='9.77359'
          transform='matrix(-1 0 0 1 672.547 0)'
          fill='white'
        />
        <rect
          width='20.1057'
          height='27.366'
          rx='10'
          transform='matrix(-1 0 0 1 703.823 60.317)'
          fill='white'
        />
        <rect
          width='18.4302'
          height='82.6566'
          rx='9.21509'
          transform='matrix(-1 0 0 1 732.864 31.834)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='83.2924'
          rx='9.90504'
          transform='matrix(-1 0 0 1 766.387 31.516)'
          fill='white'
        />
        <rect
          width='20.2603'
          height='121.112'
          rx='10'
          transform='matrix(-1 0 0 1 797.453 12.6064)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='25.6631'
          rx='9.90504'
          transform='matrix(-1 0 0 1 827.168 60.3307)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.1791'
          rx='9.90504'
          transform='matrix(-1 0 0 1 858.685 44.5727)'
          fill='white'
        />
        <rect
          width='20.1057'
          height='99.4113'
          rx='10'
          transform='matrix(-1 0 0 1 889.242 23.4566)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.1791'
          rx='9.90504'
          transform='matrix(-1 0 0 1 919.466 44.5727)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='25.9116'
          rx='9.97859'
          transform='matrix(-1 0 0 1 952.506 60.2626)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='56.9831'
          rx='9.97859'
          transform='matrix(-1 0 0 1 982.875 44.6707)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='35.2218'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1013.25 55.5514)'
          fill='white'
        />
        <rect
          width='19.8101'
          height='57.6294'
          rx='9.90504'
          transform='matrix(-1 0 0 1 1044.66 44.5727)'
          fill='white'
        />
        <rect
          width='20.1521'
          height='89.8286'
          rx='10'
          transform='matrix(-1 0 0 1 1075.34 28.248)'
          fill='white'
        />
        <rect
          width='19.8642'
          height='146.325'
          rx='9.9321'
          transform='matrix(-1 0 0 1 1105.57 0)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='25.9116'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1136.97 60.1645)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='56.9831'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1167.34 44.5727)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='35.2218'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1197.71 55.4533)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='35.1954'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1230.62 55.8459)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='77.3995'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1260.99 34.6677)'
          fill='white'
        />
        <rect
          width='19.9572'
          height='47.8414'
          rx='9.97859'
          transform='matrix(-1 0 0 1 1291.35 49.4467)'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default Progress;
