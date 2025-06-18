import { useParams } from 'react-router-dom';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
import { SongsList, PlayerLayout } from '@/components';
import styles from './Player.module.scss';

export const Player = () => {
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
      <SongsList genre={genre} tracks={data.results} />
    </div>
  );
};
