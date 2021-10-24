import { useEffect, useState } from 'react';
import { useAudio } from 'react-use';
import Volume from './Volume';
import Progress from './Progress';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const [audio, state, controls, ref] = useAudio({
    src: src,
    autoPlay: true,
  });
  const [volumeValue, setVolumeValue] = useState(0.05);

  useEffect(() => {
    controls.volume(volumeValue);
  }, [volumeValue]);

  return (
    <div>
      {audio}
      {state.playing ? (
        <button
          onClick={() => {
            controls.pause();
          }}
        >
          pause
        </button>
      ) : (
        <button
          onClick={() => {
            controls.play();
          }}
        >
          play
        </button>
      )}
      <Volume volumeValue={volumeValue} setVolume={setVolumeValue} />
      <Progress current={state.time} duration={ref.current?.duration} />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default AudioPlayer;
