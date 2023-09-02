"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Head from 'next/head';

const Home = dynamic(() => import('./Home'));

export default function Page() {
    const [loader, setLoader] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoader(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.page} ${loader ? styles.show : ''}`}>
            <Head>
                <link rel="preload" href="../../public/button/hover/1.png" as="image" />
                <link rel="preload" href="../../public/button/hover/2.png" as="image" />
                <link rel="preload" href="../../public/button/hover/3.png" as="image" />
                <link rel="preload" href="../../public/button/hover/4.png" as="image" />
                <link rel="preload" href="../../public/About.webp" as="image" />
                <link rel="preload" href="../../public/joinus.png" as="image" />
            </Head>
            <Home />
        </div>
    );
}
