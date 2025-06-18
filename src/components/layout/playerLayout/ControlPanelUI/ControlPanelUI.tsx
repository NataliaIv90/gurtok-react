import { Button, SVGIcon } from '@/components';
import type { TIconType } from '@/components/ui/SVGIcon/SVGIcon';
import styles from './ControlPanelUI.module.scss';

export type TControlPanelProps = {
  onTogglePlay: () => void;
  playBtnContent: string;
  onNextvClick: () => void;
  nextBtnContent: string;
  onPrevClick: () => void;
  prevBtnContent: string;
  duration: number;
  currentTime: number;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  isPlaying: boolean;
};

type ButtonConfig = {
  content: string;
  onClick: () => void;
  key: string;
  disabled: boolean;
};

export const ControlPanelUI = ({
  onTogglePlay,
  onNextvClick,
  nextBtnContent,
  onPrevClick,
  prevBtnContent,
  duration,
  currentTime,
  isNextDisabled,
  isPrevDisabled,
  isPlaying,
}: TControlPanelProps) => {
const buttons: ButtonConfig[] = [
  {
    content: prevBtnContent,
    onClick: onPrevClick,
    key: 'prev',
    disabled: isPrevDisabled,
  },
  {
    content: isPlaying? 'stop':'play',
    onClick: onTogglePlay,
    key: 'play',
    disabled: false,
  },
  {
    content: nextBtnContent,
    onClick: onNextvClick,
    key: 'next',
    disabled: isNextDisabled,
  },
];

  return (
    <section className={styles.wrapper}>
      <div className={styles.progressWrapper}>
        <span className={styles.time}>
          {Math.floor(currentTime / 60)}:
          {Math.floor(currentTime % 60)
            .toString()
            .padStart(2, '0')}
        </span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          readOnly
          className={styles.progressBar}
        />

        <span className={styles.time}>
          {Math.floor(duration / 60)}:
          {Math.floor(duration % 60)
            .toString()
            .padStart(2, '0')}
        </span>
      </div>

      <div className={styles.buttonsWapper}>
        {buttons.map(({ content, onClick, key, disabled }) => (
          <Button key={key} onClick={onClick} disabled={disabled}>
            <SVGIcon name={content as TIconType} alt={`${content} icon`} className={styles.icon} />
          </Button>
        ))}
      </div>
    </section>
  );
};
