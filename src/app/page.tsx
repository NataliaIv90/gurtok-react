import { PlayerLayout } from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <PlayerLayout name="Name" />
    </div>
  );
}
