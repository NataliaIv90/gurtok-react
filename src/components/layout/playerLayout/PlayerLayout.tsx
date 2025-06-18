import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
import { ControlPanelUI, SongItem } from '@/components';
import styles from './PlayerLayout.module.scss';

export const PlayerLayout = () => {
  const navigate = useNavigate();
  const { genre, trackIndex } = useParams<{ genre?: string; trackIndex?: string }>();
  if (!genre) return <></>;

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

  const isNextDisabled = index + 1 >= data.results.length;
  const isPrevDisabled = index === 0;

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

  const handleNextTrack = () => {
    if (!data) return;

    const nextIndex = index + 1;
    if (nextIndex < data.results.length) {
      navigate(`/${genre}/${nextIndex}`);
    }
  };

  const handlePrevTrack = () => {
    if (!data) return;

    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      navigate(`/${genre}/${prevIndex}`);
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
          autoPlay={false}
        />

        <ControlPanelUI
          onTogglePlay={handleTogglePlay}
          playBtnContent={isPlaying ? 'pause' : 'play'}
          onNextvClick={handleNextTrack}
          nextBtnContent="next"
          onPrevClick={handlePrevTrack}
          prevBtnContent="prev"
          duration={duration}
          currentTime={currentTime}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};
