import { FunctionComponent } from 'react';
import './Button.css';

type TButton = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  classNameList?: string;
};

export const Button: FunctionComponent<TButton> = ({
  text,
  onClick,
  disabled = false,
  classNameList = '',
}) => {
  return (
    <button className={classNameList} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
