import { ControlPanelUI, SVGIcon } from '@/components';

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
      playBtnContent={
        isPlaying ? (
          <SVGIcon name="stop" alt="stop icon" />
        ) : (
          <SVGIcon name="play" alt="play icon" />
        )
      }
      onNextvClick={() => {}}
      nextBtnContent={<SVGIcon name="next" alt="next icon" />}
      onPrevClick={() => {}}
      prevBtnContent={<SVGIcon name="prev" alt="prev icon" />}
      onLikeBtnClick={() => {}}
      likeBtnContent={<SVGIcon name="heart" alt="like icon" />}
      onGoToListBtnClick={() => {}}
      goToListContent={<SVGIcon name="list" alt="list icon" />}
      stopBtnContent={<SVGIcon name="stop" alt="stop icon" />}
    />
  );
};
