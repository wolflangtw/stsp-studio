import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './map.module.css';
import Link from 'next/link';
import Box from './Box';
import Navbar from '../Navbar/Navbar'

export default function Map() {
    const [mapData, setMapData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/api/map.json')
            .then((response) => response.json())
            .then((data) => setMapData(data))
            .catch((error) => {
                console.error('Error fetching map data:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.Map}>
            <Head>
                <title>地圖創作 | STSP Studio</title>
                <meta property="og:title" content="地圖創作 | STSP Studio" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/1094901251751280671/1136266790511575132/stsp.png" />
                <meta property="og:url" content="https://stsp.studio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="STSP Studio" />
            </Head>
            <Navbar />
            <br />
            <br />
            <h1 className={styles.title}>地圖創作</h1>
            <br />
            <hr />
            <br />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>找不到資料</p>
            ) : (
                <div className={styles.world}>
                    {mapData.map((map) => (
                        <Box
                            key={map.title}
                            title={map.title}
                            desc={map.desc}
                            type={map.type}
                            version={map.version}
                            multiplayer={map.multiplayer}
                            link={map.link}
                            diffent={map.diffent}
                            img={map.img}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
