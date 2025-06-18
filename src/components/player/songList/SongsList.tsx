import { Link } from 'react-router-dom';
import type { JamendoTrack } from '@/shared/types/jamendo';
import { SongItem } from '@/components';
import styles from './SongsList.module.scss';

interface GenreSongsListProps {
  genre: string;
  tracks: JamendoTrack[];
}

export const SongsList = ({ genre, tracks }: GenreSongsListProps) => {
  if (!Array.isArray(tracks)) return <p>Wrong data type</p>;
  if (tracks.length === 0) return <p>No tracks found</p>;

  return (
    <div className={styles['songlist-wrapper']}>
      {tracks.map((song, index) => (
        <Link key={song.id} to={`/${genre}/${index}`}>
          <SongItem data={song} playlistItem={true} />
        </Link>
      ))}
    </div>
  );
};
