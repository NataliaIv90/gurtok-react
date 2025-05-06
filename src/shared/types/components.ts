import { ReactNode } from 'react';
import { JamendoTrack } from './jamendo';

export type TButton = {
  imageSrc?: string;
  ButtonImage?: ReactNode;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string | string[];
  variant?: 'primary' | 'secondary' | 'danger' | 'image' | 'default';
};

export type TInputProps = {
  label: string;
  error?: string;
  type: 'text' | 'password';
  name: string;
};

export type TPlaylistProps = {
  data?: TSongItemData[];
};

export interface TSongItemData
  extends Pick<JamendoTrack, 'id' | 'name' | 'artist_name' | 'album_image'>,
    Partial<Omit<JamendoTrack, 'id' | 'name' | 'artist_name' | 'album_image'>> {
  onButtonClick?: () => void;
  playlistItem?: boolean;
}

export type TSongItemProps = {
  data: TSongItemData;
};
