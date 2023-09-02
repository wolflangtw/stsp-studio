import styles from './join.module.css'
import Link from 'next/link'
import '@/app/globals.css'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import { AiOutlineUser } from 'react-icons/ai'

export default function Join () {
    return(
        <div className={styles.join}>
            <Head>
                <title>加入我們 | STSP Studio</title>
                <meta property="og:title" content="加入我們 | STSP Studio" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/1094901251751280671/1136266790511575132/stsp.png" />
                <meta property="og:url" content="https://stsp.studio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="STSP Studio" />
            </Head>
            <Navbar />
            <div className={styles.main}>
                <h1>加入我們</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <AiOutlineUser />
                    <h1>
                        成為職員
                    </h1>
                </div>
                <div className={styles.rule}>
                    <h1>若想成為職員 請閱讀以下規則條款</h1>
                    <h1>能夠在團隊中 幫助到團隊進展 進入團隊 能夠幫助做事</h1>
                    <h1>將不會進團而不做事 能夠對待所有成員有好的態度</h1>
                </div>
                <div className={styles.content2}>
                    <h1>目前團隊招募人員</h1>
                </div>
                <div className={styles.box}>
                    <div className={styles.box1}>
                        <h1>地圖創作者</h1>
                    </div>
                    <div className={styles.box1}>
                        <h1>建築師</h1>
                    </div>
                    <div className={styles.box1}>
                        <h1>指令師</h1>
                    </div>
                    <div className={styles.box1}>
                        <h1>想法提供者</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}