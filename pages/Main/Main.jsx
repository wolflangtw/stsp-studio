import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Main.module.css';
import banner from '@/public/stsp.webp';
import { AiFillSafetyCertificate } from "react-icons/ai";               
import { MdOutlineDesignServices } from "react-icons/md";

const SafetyIcon = <AiFillSafetyCertificate />;
const DesignIcon = <MdOutlineDesignServices />;

export default function Main() {
    const [rotate, setRotate] = useState(false);
    const [bg, setBg] = useState(true);

    useEffect(() => {
        const bgTimer = setTimeout(() => {
            setBg(false);
        }, 3000);
        const rotateTimer = setTimeout(() => {
            setRotate(true);
        }, 500);
        return () => {
            clearTimeout(bgTimer);
            clearTimeout(rotateTimer);
        };
    }, []);

    return (       
        <div className={`${styles.main} ${bg ? styles.show : ''}`}>
            <div className={styles.head}>
                <Image className={`${styles.img} ${rotate ? styles.show : ''} `} src={banner} alt="banner" width={300} height={300} loading="eager" />
                <h1 className={`${styles.h1} ${styles.wave}`}>STSP 地圖創作團隊</h1>
            </div>
        </div>
    );
}
export async function getStaticProps() {
    const allPostsData = '';
    return {
        props: {
            allPostsData,
        },
    };
}