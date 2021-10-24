import React, { useRef } from 'react';

interface ProgessProps {
  current: number;
  duration: number;
}

const Progress = ({ current, duration }: ProgessProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  if (progressRef.current) {
    progressRef.current.style.width = `${(
      (current / duration) *
      100
    ).toString()}%`;
  }
  return (
    <div className="progress-container">
      <div ref={progressRef} className="progress"></div>
    </div>
  );
};

export default Progress;
