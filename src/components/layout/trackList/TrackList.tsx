'use client';
import { useState } from 'react';
import { useGetTracksQuery } from '@/shared/redux/jamendoApi';
// import {PlayerLayout} from '@/components';

interface Track {
  id: string;
  name: string;
  audio: string;
}

export const TrackList = () => {
  const { data, error, isLoading } = useGetTracksQuery({ genre: 'rock' });
  const [, setSelectedTrack] = useState<Track | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    if ('message' in error) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
  }

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
  };

  return (
    <div>
      <h2>Track List</h2>
      {data?.results.map((track: Track) => (
        <div key={track.id} onClick={() => handleTrackSelect(track)}>
          {track.name}
        </div>
      ))}
    </div>
  );
};

export default TrackList;
