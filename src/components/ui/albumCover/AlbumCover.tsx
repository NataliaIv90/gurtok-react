import styles from './AlbumCover.module.scss';
// import defaultImage from 'images/images.jpeg';

export type TAlbumCoverProps = {
  imgSrc: string;
  alt: string;
};

// export const AlbumCover = ({}: TAlbumCoverProps) => {
export const AlbumCover = () => {
  return (
    <section className={styles.wrapper}>
      <img src={''} alt="" className={styles.img} />
    </section>
  );
};
