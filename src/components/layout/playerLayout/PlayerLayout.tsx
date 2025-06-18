import { useRef, useState } from 'react';
import { ControlPanelContainer, SongItem } from '@/components';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
import styles from './PlayerLayout.module.scss';
import { useParams } from 'react-router-dom';

export const PlayerLayout = () => {
  const { genre, trackIndex } = useParams<{ genre?: string; trackIndex?: string }>();

  if (!genre) {
    return <div>Оберіть жанр</div>;
  }

  const index = trackIndex ? parseInt(trackIndex, 10) : 0;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data, error, isLoading } = useGetTracksQuery({ genre });

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.error('Error fetching tracks:', error);
    return <div>There was an error fetching the tracks</div>;
  }
  if (!data || !Array.isArray(data.results) || data.results.length === 0) {
    return <div>No tracks found</div>;
  }
  if (index < 0 || index >= data.results.length || isNaN(index)) {
    return <div>Invalid track selected</div>;
  }

  const track = data.results[index];

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  return (
    <div className={styles.wrapper}>
      <SongItem
        data={{
          id: track.id,
          artist_name: track.artist_name || 'Unknown Artist',
          name: track.name || 'Unknown Song Name',
          album_image: track.album_image,
        }}
      />

      <div>
        <audio
          ref={audioRef}
          src={track.audio}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          // controls
          autoPlay={false}
        />

        <ControlPanelContainer
          onTogglePlay={handleTogglePlay}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
};
