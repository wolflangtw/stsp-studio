import styles from './navbar.module.css'
export default function Navbar () {
    const home = () => {
        window.location.href = "../";
    }
    const dc = () => {
        window.open('https://discord.gg/ytKqrske7w');
    }
    const about = () => {
        window.location.href = "/About";
    }
    const map = () => {
        window.location.href = "/Maps";
    }
    const join = () => {
        window.location.href = "/Join-us";
    }

    return(
        <div className={styles.navbar}>
            <li onClick={home}>回到首頁</li>
            <li onClick={about}>關於我們</li>
            <li onClick={join}>加入我們</li>
            <li onClick={map}>地圖創作</li>
            <li onClick={dc}>Discord</li>
        </div>
    )
}