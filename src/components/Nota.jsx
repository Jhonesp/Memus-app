import React from 'react'
import styles from './Notas.module.css'
import { Icon } from '@iconify/react';

const Nota = ({texto}) => {
  return (
    <div className={styles.nota_container}>
      <div className={styles.nota_top}></div>
        <p>{texto}</p>
        <div className={styles.delete}><Icon icon="ant-design:delete-outlined" /></div>
    </div>
  )
}

export default Nota