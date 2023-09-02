import styles from './title.module.css'

export default function Title() {
    return (
        <div className={styles.title} data-aos="fade-down">
            <div className={styles.box1}>
                <h2>我們是一個專注打造全方面技術俱樂部團隊</h2>
            </div>
            <div className={styles.box2}>
            <h2>酷受創造世界 展現技術 打造創新團隊</h2>
            </div>
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