import { ReactNode } from 'react';
import { combineClassNames } from '@/utils';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string | string[];
  variant?: string;
  children: ReactNode;
};

export const Button = ({
  onClick,
  disabled = false,
  className = '',
  variant,
  children,
}: ButtonProps) => {
  const combinedClassName = combineClassNames({
    base: styles.btn,
    extra: Array.isArray(className)
      ? [styles[variant || ''], ...className]
      : [styles[variant || ''], className],
  });

  return (
    <button className={combinedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
