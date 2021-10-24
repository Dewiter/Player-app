interface VolumeProps {
  setVolume: (volume: number) => void;
  volumeValue: number;
}

const Volume = ({ volumeValue, setVolume }: VolumeProps) => {
  return (
    <div>
      <input
        onChange={(e) => setVolume(parseInt(e.target.value) / 100)}
        type="range"
        value={volumeValue * 100}
      />
    </div>
  );
};

export default Volume;
