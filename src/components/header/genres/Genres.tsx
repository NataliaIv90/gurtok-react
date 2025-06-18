import { Link } from 'react-router-dom';
import { genresArray } from '@/shared/data/genresData';
import styles from './Genres.module.scss';
import { Button } from '../../ui/button/Button';

export const Genres = () => (
    <>
      <div className={styles.wrapper}>
        {genresArray.map((genre) => (
          <Link key={genre} to={`/${genre}`}>
            <Button>{genre}</Button>
          </Link>
        ))}
      </div>
    </>
  );
