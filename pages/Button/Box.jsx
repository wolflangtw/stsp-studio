import Link from 'next/link'
import React from 'react';
import styles from './button.module.css';

const Box = ({ title, onc }) => {
    return (
            <div className={styles.box} onClick={onc}>
                <h1>{title}</h1>
            </div>
    );
};

export default Box;
