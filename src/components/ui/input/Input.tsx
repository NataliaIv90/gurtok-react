import styles from './Input.styles.scss';
import { TInputProps } from '@/types/components';

export const Input = ({ label, error, type = 'text', name }: TInputProps) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} type={type} name={name} />
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
};
