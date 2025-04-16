import Image from 'next/image';

import { combineClassNames } from '@/utils';
import styles from './Button.module.scss';
import { TButton } from '@/shared/types/components';

export const Button = ({
  text,
  imageSrc,
  ButtonImage,
  onClick,
  disabled = false,
  className = '',
  variant = undefined,
  // key = undefined,
}: TButton) => {
  const combinedClassName = combineClassNames({
    base: styles.btn,
    extra: Array.isArray(className)
      ? [styles[variant || ''], ...className]
      : [styles[variant || ''], className],
  });

  if (variant === 'image') {
    return (
      <button
        className={combinedClassName}
        onClick={onClick}
        disabled={disabled}
        // key={key}
      >
        {ButtonImage ? (
          <ButtonImage className={styles.img} />
        ) : (
          <Image
            src={imageSrc || ''}
            alt="Button image"
            className={styles.img}
          />
        )}
      </button>
    );
  }
  return (
    <button
      // key={key}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
