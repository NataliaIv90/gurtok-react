'use client';

import {  ControlPanel, SongItem } from '@/components';

import styles from './PlayerLayout.module.scss';

type TPlayer = {
  name: string;
};

export const PlayerLayout = ({}: TPlayer) => {
  const onTogglePlay = () => {};
  const onNextvClick = () => {};
  const onPrevClick = () => {};
  // const onAddToPlaylistClick = () => {};
  const onLikeBtnClick = () => {};

  return (
    <div className={styles.wrapper}>
      <h1>Now playing</h1>
      <SongItem
  data={{
    id: 'id',
    artist: 'Artist',
    songName: 'Song 1',
  }}
/>
      <ControlPanel
        // addToPlaylistBtnContent="Add"
        likeBtnContent="like"
        nextBtnContent="Next"
        // onAddToPlaylistClick={onAddToPlaylistClick}
        onLikeBtnClick={onLikeBtnClick}
        onNextvClick={onNextvClick}
        onPrevClick={onPrevClick}
        onTogglePlay={onTogglePlay}
        playBtnContent="Play"
        prevBtnContent="Prev"
        />
    </div>
  );
};
