import { useParams } from 'react-router-dom';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
import { GenreSongsList, PlayerLayout } from '@/components';
import styles from './SongList.module.scss';

export const GenreSongsPage = () => {
  const { genre, trackIndex } = useParams<{ genre?: string; trackIndex?: string }>();

  if (!genre) {
    return <div>Оберіть жанр</div>;
  }

  const { data, isLoading, error } = useGetTracksQuery({ genre });

  if (isLoading) return <div>Loading tracks...</div>;
  if (error || !data) return <div>Failed to load tracks</div>;

  return (
    <div className={styles.wrapper}>
      <div>{trackIndex !== undefined ? <PlayerLayout /> : <div>Оберіть пісню</div>}</div>
      <GenreSongsList genre={genre} tracks={data.results} />
    </div>
  );
};
