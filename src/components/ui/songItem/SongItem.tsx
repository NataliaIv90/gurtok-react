import type { TSongItemProps } from '@/shared/types/components';
import styles from './SongItem.module.scss';

export const SongItem = ({ data, playlistItem }: TSongItemProps) => {
  const { id, album_image, artist_name, name } = data;

  return (
    <section key={id} className={playlistItem ? styles.playlistItemWrapper : styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={album_image} alt={`${name} cover`} className={styles.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.songName} title={name}>
          {name}
        </p>
        <p className={styles.artist}>{artist_name}</p>
      </div>
    </section>
  );
};
