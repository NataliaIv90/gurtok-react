import { ControlPanelUI } from '@/components';

type Props = {
  onTogglePlay: () => void;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
};

export const ControlPanelContainer = ({
  currentTime,
  onTogglePlay,
  isPlaying,
  duration,
}: Props) => {
  return (
    <ControlPanelUI
      duration={duration}
      currentTime={currentTime}
      onTogglePlay={onTogglePlay}
      playBtnContent={isPlaying ? 'stop' : 'play'}
      onNextvClick={() => {}}
      nextBtnContent="next"
      onPrevClick={() => {}}
      prevBtnContent="prev"
    />
  );
};
