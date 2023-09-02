import Image from 'next/image';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './styles/Boat.module.css';
import a from '@/public/map/boat/大廳.webp'
import b from '@/public/map/boat/設定室.webp'
import c from '@/public/map/boat/生成範例圖示-1.webp'
import d from '@/public/map/boat/生成範例圖示-1 生成結果.webp'
import e from '@/public/map/boat/生成範例圖示-2.webp'
import f from '@/public/map/boat/生成範例圖示-2 生成結果.webp'

export default function Boat() {
    const router = useRouter();
    return(
        <div className={styles.boat}>
            <Head>
                <title>急速競飆 | STSP Studio</title>
                <meta property="og:title" content=" 急速競飆 | STSP Studio" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://test.stsp.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspeed.58580962.png&w=640&q=75" />
                <meta property="og:url" content="https://stsp.studio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="STSP Studio" />
            </Head>
            <Link href="/Maps" passHref>
                <div className={styles.back}>
                    回上一頁
                </div>
            </Link>
            <h1>急速競飆</h1>
            <h2>這是一個可以提供玩家在遊戲內 以自己的想法去創作賽道來競賽的地圖傳統的冰船地圖 <br/>基本上都不提供 玩家可以編輯賽道然而本地圖提供玩家 可以自行編輯 賽道總類多樣</h2>
            <hr/>
            <div className={styles.div}>
                <div className={styles.make}>
                    <div className={styles.makebox}>
                        <h3>作者: <span>雷霆鋒利 (Lei_sharp</span><br/>測試人員: <span>玉米、輝月、狼狼、sde、Zoixa</span></h3>
                    </div>
                </div>
                <h3>遊戲大廳:</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={a} width={600} height={300} alt="遊戲大廳"></Image>
                <h3>設定室:</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={b} width={600} height={700} alt="設定室"></Image>
                <h3>生成範例圖示-1</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={c} width={600} height={300} alt="生成範例圖示-1"></Image>
                <h3>生成結果</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={d} width={600} height={300} alt="生成結果"></Image>
                <h3>生成範例圖示-2</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={e} width={600} height={300} alt="生成範例圖示-2"></Image>
                <h3>生成結果</h3>
                <Image layout="fixed" placeholder="blur" blurDataURL="/stsp.webp" loading="eager" src={f} width={600} height={300} alt="生成結果"></Image>
                <h3>教學影片</h3>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/b8hQxfFFlKU" title="[地圖發布] [急速競飆] (還需要優化)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/dSzbjDKBStk" title="[急速競飆] 更正版!! 正式發布!!!!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <hr/>
            <h2>最後<br/>這是一張耗時常1個禮拜做出來的地圖 <br/>地圖啟發: 某天玩別人的冰船地圖就開始在想 地圖能不能給玩家自行編輯跑道的功能<br/>所以此地圖誕生了地圖<br/>特點: 玩家可以用10種不同的賽道 拼出自身理想的賽道與朋友一起在自己做的賽道上奔馳</h2>
            <div className={styles.dw}>
                <a href="https://www.dropbox.com/scl/fi/y3me6fzphojx3uzmuij4s/.zip?rlkey=abil0uffqktmidjlg18rlr4ea&dl=1">下載檔案</a>
            </div>
        </div>
    )
}