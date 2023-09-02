import Image from 'next/image'
import styles from './map.module.css'
import { useRouter } from 'next/router';


export default function Box({ title, desc, type, version, multiplayer, link, diffent ,img}) {
    const router = useRouter();

    const handleBoxClick = () => {
        router.push(link);
    };

    return (
        <div className={styles.world1} onClick={handleBoxClick}>
            <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" alt="img" src={img} id="img" width="405" height="250"/>
            <h2>{title}</h2>
            <span className={styles.diffent}>
                <p>難易度: {diffent}</p>
                <p className={styles.star} id="star1"></p>
            </span>
            <p className={styles.plot}>{desc}</p>
            <div className={styles.tag}>
                <span className={styles.tag1}>{type}</span>
                <span className={styles.tag1}>{version}</span>
                <span className={styles.tag1}>{multiplayer}</span>
            </div>
        </div>
    )
}
