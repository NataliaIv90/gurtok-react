import { useRef, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
import { ControlPanelUI, SongItem } from '@/components';
import styles from './PlayerLayout.module.scss';

export const PlayerLayout = () => {
  const navigate = useNavigate();
  const { genre, trackIndex } = useParams<{ genre?: string; trackIndex?: string }>();
  if (!genre) return null;

  const index = trackIndex ? Number(trackIndex) : 0;

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
  if (!data?.results?.length) return <div>No tracks found</div>;
  if (index < 0 || index >= data.results.length || Number.isNaN(index))
    return <div>Invalid track selected</div>;

  const track = data.results[index];
  const isNextDisabled = index >= data.results.length - 1;
  const isPrevDisabled = index === 0;

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const onLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  }, []);

  const onTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
  }, []);

  const goToTrack = useCallback(
    (newIndex: number) => {
      if (newIndex >= 0 && newIndex < data.results.length) {
        navigate(`/${genre}/${newIndex}`);
      }
    },
    [data, genre, navigate],
  );

  const handleNextTrack = () => goToTrack(index + 1);
  const handlePrevTrack = () => goToTrack(index - 1);

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
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          autoPlay={false}
        />
        <ControlPanelUI
          onTogglePlay={togglePlay}
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
