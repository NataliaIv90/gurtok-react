import { ReactNode } from 'react';

export type TButton = {
  imageSrc?: string;
  ButtonImage?: ReactNode;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string | string[];
  variant?: 'primary' | 'secondary' | 'danger' | 'image' | 'default';
  // key?: string | number;
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

export type TSongItemData = {
  id: string;
  albumCover?: string;
  artist: string;
  songName: string;
  onButtonClick?: () => void;
  playlistItem?: boolean;
};

export type TSongItemProps = {
  data: TSongItemData;
};
