import { ElementType } from 'react';
import { Button } from '@/components';
import styles from './ControlPanel.module.scss';

export type TControlPanelProps = {
  onTogglePlay: () => void;
  playBtnContent: string | ElementType;
  onNextvClick: () => void;
  nextBtnContent: string | ElementType;
  onPrevClick: () => void;
  prevBtnContent: string | ElementType;
  onLikeBtnClick: () => void;
  likeBtnContent: string | ElementType;
  // onAddToPlaylistClick: () => void;
  // addToPlaylistBtnContent: string | ElementType;
};

type ButtonConfig = {
  content: string | ElementType;
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
}: TControlPanelProps) => {
  const buttons: ButtonConfig[] = [
    { content: prevBtnContent, onClick: onPrevClick, key: 'prev' },
    { content: playBtnContent, onClick: onTogglePlay, key: 'play' },
    { content: nextBtnContent, onClick: onNextvClick, key: 'next' },
    { content: likeBtnContent, onClick: onLikeBtnClick, key: 'like' },
    // { content: addToPlaylistBtnContent, onClick: onAddToPlaylistClick, key: 'addToPlaylist' },
  ];

  return (
    <section className={styles.wrapper}>
      {buttons.map(({ content, onClick, key }) =>
        typeof content === 'string' ? (
          <Button key={key} text={content} onClick={onClick} />
        ) : (
          <Button key={key} ButtonImage={content} onClick={onClick} variant="image" />
        )
      )}
    </section>
  );
};
