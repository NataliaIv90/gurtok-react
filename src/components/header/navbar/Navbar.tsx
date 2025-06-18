import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const getLinkClass = (isActive: boolean) =>
  `${styles['nav-link']} ${isActive ? styles['active'] : ''}`;

export const Navbar = () => {
  return (
    <nav className={styles['header-wrapper']}>
      <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => getLinkClass(isActive)}>
        About
      </NavLink>
    </nav>
  );
};
