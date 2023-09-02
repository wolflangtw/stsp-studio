import Link from 'next/link'
import styles from './Footer.module.css'
import { AiFillCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.center}>
                <div className={styles.circle}></div>
                <div className={styles.text}>
                    <h2>stsp 俱樂部團隊</h2>
                    <h2>版權所有</h2>
                </div>
                <div className={styles.circle}></div>
            </div>
            <Link href="/Copyright">
                <div className={styles.copy}>
                    <h2>隱私權政策</h2>
                    <AiFillCopyrightCircle width={50} hanging={50}/>
                </div>
            </Link>
        </div>
    );
}
export async function getStaticProps() {
    const data = "";
    return {
        props: {
            data,
        },
    };
}