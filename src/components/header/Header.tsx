import { Genres } from './genres/Genres';
import { Navbar } from './navbar/Navbar';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Navbar />
    <Genres />
  </header>
);
