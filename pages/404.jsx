import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from './404.module.css'
import Head from 'next/head'

const back = () => {
    window.location = './';
}

const NotFound = () => {
    
    return (
        <div className={styles.error}>
            <Head>
                <title>404 - 錯誤</title>
            </Head>
            <div className={styles.title}>
                <h1>404</h1>
            </div>
            <div className={styles.msg}>
                <h2>出現了未知的錯誤</h2>
            </div>
            
            {/* <div className={styles.back} onClick={back}>
                <h1>點我回到首頁</h1>
            </div> */}
        </div>
    );
};

export default NotFound;

