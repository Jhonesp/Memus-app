import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    const date = new Date();
    const d = date.getDate();
    const month = (date.getMonth() +1);
    const year = date.getFullYear();
  return (
    <div className={styles.header_container}>
        <div className={styles.header_comienzo}>
            <p>Noter App</p>
        </div>
        <div className={styles.header_end}>
            <p>{d}/{month}/{year}</p>
        </div>
    </div>
  )
}

export default Header