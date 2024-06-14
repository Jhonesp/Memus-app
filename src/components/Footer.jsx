import React from 'react'
import styles from './Footer.module.css'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className={styles.container}>
        <h4>Sitio hecho con amor por yum ❤️</h4>
        <div className={styles.icons}>
        <a href="https://github.com/Jhonesp"><Icon icon="mdi:github" /></a>
        <a href="https://x.com/yumboy0"><Icon icon="ri:twitter-x-fill" /></a>
        </div>
    </div>
  )
}

export default Footer