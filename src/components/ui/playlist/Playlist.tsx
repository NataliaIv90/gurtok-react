import type { TPlaylistProps } from '@/shared/types/components';
import { SongItem } from '../songItem/SongItem';

import styles from './Playlist.module.scss';

export const Playlist = ({ data }: TPlaylistProps) => {
  return (
    <div className={styles.wrapper}>
      {data?.length ? data.map((song) => <SongItem data={song} key={song.id} />) : <p>No data</p>}
    </div>
  );
};
