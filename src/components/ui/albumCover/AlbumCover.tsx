import Image from 'next/image';
import styles from './AlbumCover.module.scss';
import defaultImage from '../../../../public/images.jpeg';

export type TAlbumCoverProps = {
imgSrc:string,
alt:string,
}

export const AlbumCover =({}:TAlbumCoverProps)=>{
    return (
        <section className={styles.wrapper}>
            <Image src={defaultImage} alt="" className={styles.img} />
        </section>
    )    
}
