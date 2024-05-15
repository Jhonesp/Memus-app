import React from 'react'
import styles from './Notas.module.css'
import { Icon } from '@iconify/react';

const Nota = ({id,autor,texto, deleteNota}) => {
  return (
    <div className={styles.nota_container}>
      <div className={styles.nota_top}></div>
        <p>{texto}</p>
        <div className={styles.delete}>
          <p id={styles.autor}>Autor: {autor}</p>
          <Icon icon="ant-design:delete-outlined" onClick={()=>{console.log(id);deleteNota(id)}}/>
        </div>
    </div>
  )
}

export default Nota