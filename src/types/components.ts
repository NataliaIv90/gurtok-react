import { ElementType } from 'react';

export type TButton = {
  imageSrc?: string;
  ButtonImage?: ElementType;
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
