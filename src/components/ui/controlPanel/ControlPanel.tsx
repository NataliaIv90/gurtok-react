import { ReactNode } from 'react';
import { Button } from '@/components';
import styles from './ControlPanel.module.scss';

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
  // onAddToPlaylistClick: () => void;
  // addToPlaylistBtnContent: string | ReactNode;
};

type ButtonConfig = {
  content: string | ReactNode;
  onClick: () => void;
  key: string;
};

export const ControlPanel = ({
  onTogglePlay,
  playBtnContent,
  onNextvClick,
  nextBtnContent,
  onPrevClick,
  prevBtnContent,
  // onAddToPlaylistClick,
  // addToPlaylistBtnContent,
  onLikeBtnClick,
  likeBtnContent,
  onGoToListBtnClick,
  goToListContent,
  stopBtnContent,
}: TControlPanelProps) => {
  const isPlaying = false;

  const buttons: ButtonConfig[] = [
    { content: goToListContent, onClick: onGoToListBtnClick, key: 'list' },
    { content: prevBtnContent, onClick: onPrevClick, key: 'prev' },
    {
      content: isPlaying ? stopBtnContent : playBtnContent,
      onClick: onTogglePlay,
      key: 'play',
    },
    { content: nextBtnContent, onClick: onNextvClick, key: 'next' },
    { content: likeBtnContent, onClick: onLikeBtnClick, key: 'like' },
    // { content: addToPlaylistBtnContent, onClick: onAddToPlaylistClick, key: 'addToPlaylist' },
  ];

  return (
    <section className={styles.wrapper}>
      {buttons.map(({ content, onClick, key }) => (
        <Button key={key} onClick={onClick}>
          {content}
        </Button>
      ))}
    </section>
  );
};
