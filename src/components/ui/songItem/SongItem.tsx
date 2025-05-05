'use client';

import Image from 'next/image';

import { TSongItemProps } from '@/shared/types/components';
import styles from './SongItem.module.scss';

export const SongItem = ({ data }: TSongItemProps) => {
  const { id, album_image, artist_name, name, onButtonClick, playlistItem } =
    data;

  return (
    <section
      key={id}
      className={playlistItem ? styles.playlistItemWrapper : styles.wrapper}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={album_image}
          alt={`${name} cover`}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.songName}>{name}</p>
        <p className={styles.artist}>{artist_name}</p>

        {playlistItem ? (
          <button onClick={onButtonClick} className={styles.button}>
            Play
          </button>
        ) : null}
      </div>
    </section>
  );
};
