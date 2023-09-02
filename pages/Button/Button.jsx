import React from 'react';
import Head from 'next/head'
import styles from './button.module.css';
import Box from './Box'

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

const make = () => {
    alert("STSP網站還在開發中，請等待數週。我們將帶給您不同的體驗，敬請期待！\n\nSTSP Studio團隊 敬上")
}

export default function Button() {
    return (
        <div className={styles.button}>
            <Box title="關於我們" onc={about}/>
            <Box title="加入我們" onc={join}/>
            <Box title="地圖創作" onc={map}/>
            <Box title="Discord" onc={dc}/>
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