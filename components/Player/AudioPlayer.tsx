import { useAudio } from 'react-use';

const AudioPlayer = () => {
  const [audio, state, controls, ref] = useAudio({
    src: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    autoPlay: true,
  });

  return (
    <div>
      {audio}
      {controls.pause()}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default AudioPlayer;
