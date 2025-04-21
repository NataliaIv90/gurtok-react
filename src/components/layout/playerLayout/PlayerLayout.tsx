'use client';

import { ControlPanel, SongItem, SVGIcon } from '@/components';
import styles from './PlayerLayout.module.scss';

type TPlayer = {
  name: string;
};

export const PlayerLayout = ({}: TPlayer) => {
  const onTogglePlay = () => {};
  const onNextvClick = () => {};
  const onPrevClick = () => {};
  const onLikeBtnClick = () => {};
  const onGoToListBtnClick = () => {};

  return (
    <div className={styles.wrapper}>
      <h1>Now playing</h1>
      <SongItem
        data={{
          id: 'id',
          artist: "Artist's long long long long name",
          songName: 'Song 1 long long long long name',
        }}
      />
      <ControlPanel
        onTogglePlay={onTogglePlay}
        playBtnContent={<SVGIcon name="play" alt="Play button" />}
        stopBtnContent={<SVGIcon name="stop" alt="Stop button" />}
        onNextvClick={onNextvClick}
        nextBtnContent={<SVGIcon name="next" alt="Next button" />}
        onPrevClick={onPrevClick}
        prevBtnContent={<SVGIcon name="prev" alt="Previous button" />} // change to 'prev' if you have an icon for that
        onLikeBtnClick={onLikeBtnClick}
        likeBtnContent={<SVGIcon name="heart" alt="Like button" />}
        onGoToListBtnClick={onGoToListBtnClick}
        goToListContent={<SVGIcon name="list" alt="Go to list" />}
      />
    </div>
  );
};
