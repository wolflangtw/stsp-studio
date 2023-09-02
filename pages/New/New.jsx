import styles from './new.module.css'
export default function New(){
    return(
        <div className={styles.new}>
            <h1>最新公告:</h1>
            <h1>我們的Blog已經建立了喔! 如果你想要分享有趣的事情，歡迎來Discord投稿! 記住:請勿投稿違法的內容</h1>
            <a href='https://blog.stsp.studio/' target='_blank'>點擊前往Blog</a>
        </div>
    )
}