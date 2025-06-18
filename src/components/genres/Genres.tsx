'use client';
import { genresArray } from '@/shared/data/genresData';
import styles from './Genres.module.scss';
import { Button } from '../ui/button/Button';
import { Link } from 'react-router-dom';

export const Genres = () => {
  return (
    <>
      <h1 className={styles.header}>Genres list</h1>
      <div className={styles.wrapper}>
        {genresArray.map((genre) => (
          <Link key={genre} to={`/${genre}`}>
            <Button>{genre}</Button>
          </Link>
        ))}
      </div>
    </>
  );
};
