import Image from 'next/image'
import Head from 'next/head'
import styles from './about.module.css'
import '../../app/globals.css'
import { FiUsers } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
const wolf = '/users/wolf.webp';
const wwzai = '/users/wwzai.webp';
const lei = '/users/lei.webp';
const stare = '/users/stare.webp';
const paper = '/users/paper.webp';

export default function About() {
    return (
        <div className={styles.About}>
            <Head>
                <title>關於我們 | STSP Studio</title>
                <meta property="og:title" content="關於我們 | STSP Studio" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/1094901251751280671/1136266790511575132/stsp.png" />
                <meta property="og:url" content="https://stsp.studio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="STSP Studio" />
            </Head>
            <Navbar />
            {/* <Link href="/" passHref>
                <div className={styles.back}>
                    回到首頁
                </div>
            </Link> */}
            <div className={styles.main}>
                <h1>關於我們</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <FiUsers/>
                    <h1>
                        管理階層
                    </h1>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <Image loading="eager" src={wolf} alt="wolf" width={200} height={200}></Image>
                    <div class={styles.info}>
                        <h1>狼狼</h1>
                        <p>貢獻: 指揮官、網站、地圖製作</p>
                    </div>
                </div>
                <div className={styles.box2}>
                    <Image loading="eager" src={paper} alt="paper_cricel" width={200} height={200}></Image>
                    <div class={styles.info}>
                        <h1>紙圓</h1>
                        <p>貢獻: 副指揮官、地圖製作大師</p>
                    </div>
                </div>
                <div className={styles.box1}>
                    <Image loading="eager" src={wwzai} alt="wwzai" width={200} height={200}></Image>
                    <div class={styles.info}>
                        <h1>旺旺仔</h1>
                        <p>貢獻: Discord群管理、設計師</p>
                    </div>
                </div>
                <div className={styles.box2}>
                    <Image loading="eager" src={lei} alt="lei_sharp" width={200} height={200}></Image>
                    <div class={styles.info}>
                        <h1>雷霆鋒利</h1>
                        <p>貢獻: 地圖創作</p>
                    </div>
                </div>
                <div className={styles.box1}>
                    <Image loading="eager" src={stare} alt="stare" width={200} height={200}></Image>
                    <div class={styles.info}>
                        <h1>黑夢</h1>
                        <p>貢獻: Minecraft伺服器空間、付費插件</p>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
}
