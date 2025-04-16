'use client';

import Image from 'next/image';

import { TSongItemProps } from '@/shared/types/components';
import styles from './SongItem.module.scss';
import defaultImage from '../../../../public/images.jpeg';

export const SongItem = ({ data }: TSongItemProps) => {
  const { id, albumCover=defaultImage, artist, songName, onButtonClick, playlistItem } = data;

if (!playlistItem){
  return(
    <section className={styles.wrapper}>
     <div className={styles.imageWrapper}>
     <Image
  src={albumCover}
  alt={`${songName} cover`}
  // fill
  className={styles.image}
/>

        </div>
        <div className={styles.info}>
    <p className={styles.songName}>{songName}</p>
    <p className={styles.artist}>{artist}</p>
  </div>

    </section>

  )
}

  return (
    <section className={styles.playlistItemWrapper} key={id}>
      {albumCover && (
        <div className={styles.imageWrapper}>
          <Image
            src={albumCover}
            alt={`${songName} cover`}
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.info}>
        <p className={styles.songName}>{songName}</p>
        <p className={styles.artist}>{artist}</p>
        <button onClick={onButtonClick} className={styles.button}>
          Play
        </button>
      </div>
    </section>
  );
};
