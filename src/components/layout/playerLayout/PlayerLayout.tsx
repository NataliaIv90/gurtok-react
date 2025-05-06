'use client';

import { useRef, useState } from 'react';

import { ControlPanelContainer, SongItem } from '@/components';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';

import defaultImage from '../../../../public/images.jpeg';
import styles from './PlayerLayout.module.scss';

export const PlayerLayout = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const { data, error, isLoading } = useGetTracksQuery({ genre: 'rock' });
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const track = data?.results[0];

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

  if (isLoading) return <div>Loading...</div>;

  if (!track) {
    return <div>No track found</div>;
  }

  if (error) {
    console.error('Error fetching tracks:', error);
    return <div>There was an error fetching the tracks</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h1>Now playing</h1>
      <SongItem
        data={{
          id: track.id,
          artist_name: track.artist_name || 'Unknown Artist',
          name: track.name || 'Unknown Song Name',
          album_image: track.album_image || defaultImage,
        }}
      />

      <>
        <audio
          ref={audioRef}
          src={track.audio}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />

        <ControlPanelContainer
          onTogglePlay={handleTogglePlay}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </>
    </div>
  );
};
