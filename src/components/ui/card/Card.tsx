import { Button } from '@/components';
import { playAudio } from '@/shared/utils';
import styles from './Card.module.scss';

type TCardProps = {
  img: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
};

export const Card = ({ img = '', title = '', subtitle = '', onClick }: TCardProps) => {
  return (
    <section className={styles.card}>
      <div className={styles['img-wrapper']}>
        <img src={img} alt={`${title} cover`} className={styles.img} />
        {onClick ? (
          <Button variant="image" onClick={playAudio}>
            Play
          </Button>
        ) : null}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </section>
  );
};
