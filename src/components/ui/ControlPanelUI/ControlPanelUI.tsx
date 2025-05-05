import { ReactNode } from 'react';
import { Button } from '@/components';
import styles from './ControlPanelUI.module.scss';

export type TControlPanelProps = {
  onTogglePlay: () => void;
  playBtnContent: string | ReactNode;
  onNextvClick: () => void;
  nextBtnContent: string | ReactNode;
  onPrevClick: () => void;
  prevBtnContent: string | ReactNode;
  onLikeBtnClick: () => void;
  likeBtnContent: string | ReactNode;
  onGoToListBtnClick: () => void;
  goToListContent: string | ReactNode;
  stopBtnContent: string | ReactNode;
  duration: number;
};

type ButtonConfig = {
  content: string | ReactNode;
  onClick: () => void;
  key: string;
  disabled: boolean;
};

export const ControlPanelUI = ({
  onTogglePlay,
  playBtnContent,
  onNextvClick,
  nextBtnContent,
  onPrevClick,
  prevBtnContent,
  onLikeBtnClick,
  likeBtnContent,
  onGoToListBtnClick,
  goToListContent,
  duration,
  // stopBtnContent,
}: TControlPanelProps) => {
  // const isPlaying = false;

  const buttons: ButtonConfig[] = [
    {
      content: goToListContent,
      onClick: onGoToListBtnClick,
      key: 'list',
      disabled: true,
    },
    {
      content: prevBtnContent,
      onClick: onPrevClick,
      key: 'prev',
      disabled: true,
    },
    {
      content: playBtnContent,
      onClick: onTogglePlay,
      key: 'play',
      disabled: false,
    },
    {
      content: nextBtnContent,
      onClick: onNextvClick,
      key: 'next',
      disabled: true,
    },
    {
      content: likeBtnContent,
      onClick: onLikeBtnClick,
      key: 'like',
      disabled: true,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.buttonsWapper}>
        {buttons.map(({ content, onClick, key, disabled }) => (
          <Button key={key} onClick={onClick} disabled={disabled}>
            {content}
          </Button>
        ))}
      </div>
      <div className={styles.duration}>
        {duration
          ? `${Math.floor(duration / 60)}:${Math.floor(duration % 60)
              .toString()
              .padStart(2, '0')}`
          : '0:00'}
      </div>
    </section>
  );
};
